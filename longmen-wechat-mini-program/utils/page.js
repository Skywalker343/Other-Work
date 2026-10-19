const game = require("./game");

const pagePaths = {
  route: "/pages/route/index",
  tasks: "/pages/tasks/index",
  fragments: "/pages/fragments/index",
  rewards: "/pages/rewards/index"
};

function createPage(pageKey, extra) {
  const additions = extra || {};
  const page = {
    data: {
      language: "zh",
      activePage: pageKey,
      hasRole: false,
      selectedAnswer: -1
    },
    onLoad(options) {
      if (pageKey === "identity") this.allowRoleSelect = !!(options && options.edit === "1");
      if (additions.onLoad) additions.onLoad.call(this, options || {});
    },
    onShow() {
      const state = game.loadState();
      if (pageKey !== "identity" && !state.role && !this.didRedirect) {
        this.didRedirect = true;
        wx.redirectTo({ url: "/pages/identity/index" });
        return;
      }
      if (pageKey === "identity" && state.role && !this.allowRoleSelect && !this.didRedirect) {
        this.didRedirect = true;
        wx.redirectTo({ url: pagePaths.route });
        return;
      }
      this.refresh();
      if (additions.onShow) additions.onShow.call(this);
    },
    refresh() {
      const state = game.loadState();
      const view = game.buildView(state, this.taskId);
      this.setData(Object.assign({}, view, {
        activePage: pageKey,
        hasRole: !!state.role,
        selectedAnswer: this.data.selectedAnswer === undefined ? -1 : this.data.selectedAnswer
      }));
      const titles = {
        identity: "pageIdentityTitle",
        route: "pageRouteTitle",
        tasks: "taskHeader",
        "task-detail": "npcInteraction",
        fragments: "inventory",
        rewards: "rewardsTitle"
      };
      wx.setNavigationBarTitle({ title: game.text(state.language, titles[pageKey]) });
    },
    onToggleLanguage() {
      game.toggleLanguage();
      this.refresh();
    },
    onSwitchIdentity() {
      wx.redirectTo({ url: "/pages/identity/index?edit=1" });
    },
    onNavigate(event) {
      const target = (event.detail && event.detail.target) || (event.currentTarget && event.currentTarget.dataset.target);
      if (target === "scan") {
        this.onScanAction();
        return;
      }
      const state = game.loadState();
      if (!state.role) {
        wx.showToast({ title: game.text(state.language, "chooseFirst"), icon: "none" });
        return;
      }
      if (pagePaths[target]) wx.redirectTo({ url: pagePaths[target] });
    },
    onScanAction() {
      const stage = this.selectComponent("#arStage");
      if (stage) stage.openScanner();
    },
    onClueFound(event) {
      const state = game.loadState();
      if (!state.role) {
        wx.showToast({ title: game.text(state.language, "noRoleScan"), icon: "none" });
        return;
      }
      const tasks = game.roleData[state.role].tasks;
      const code = String(event.detail.code || "").trim();
      const codeTask = tasks.find((task) => {
        return (task.id === code || code.indexOf(task.id) >= 0) && state.saves[state.role].done.indexOf(task.id) < 0;
      });
      if (code && !codeTask) {
        wx.showToast({ title: game.text(state.language, "taskQrUnrecognized"), icon: "none" });
        return;
      }
      const task = codeTask || tasks.find((item) => state.saves[state.role].done.indexOf(item.id) < 0);
      if (!task) {
        wx.showToast({ title: game.text(state.language, "noNextTask"), icon: "none" });
        return;
      }
      wx.showToast({ title: game.text(state.language, "foundClue") + " · " + game.localize(task, "place", state.language), icon: "none" });
      wx.redirectTo({ url: "/pages/task-detail/index?id=" + task.id });
    },
    onNameInput(event) {
      const name = event.detail.value || "";
      this.setData({ playerName: name });
      game.setName(name);
    },
    onChooseRole(event) {
      const role = event.currentTarget.dataset.role;
      const name = this.data.playerName || "";
      game.chooseRole(role, name);
      wx.redirectTo({ url: pagePaths.route });
    },
    onOpenTask(event) {
      const id = event.currentTarget.dataset.task;
      wx.redirectTo({ url: "/pages/task-detail/index?id=" + id });
    },
    onSelectAnswer(event) {
      this.setData({ selectedAnswer: Number(event.currentTarget.dataset.answer) });
    },
    onCompleteTask() {
      const task = this.data.selectedTask;
      if (!task) return;
      const state = game.loadState();
      if (this.data.selectedAnswer !== task.answer) {
        wx.showToast({ title: game.text(state.language, "wrongAnswer"), icon: "none" });
        return;
      }
      const result = game.completeTask(state.role, task.id);
      const message = result.complete
        ? game.text(state.language, "missionAllComplete")
        : game.text(state.language, "missionComplete") + " +" + task.points + game.text(state.language, "earnedPoints");
      wx.showToast({ title: message, icon: "none", duration: 2000 });
      wx.redirectTo({ url: pagePaths.tasks });
    },
    onCouponRedeem(event) {
      const result = game.redeemCoupon(event.currentTarget.dataset.coupon);
      const state = game.loadState();
      if (result.error === "points") {
        wx.showToast({ title: game.text(state.language, "pointsShort"), icon: "none" });
      } else if (!result.error) {
        this.refresh();
        wx.showToast({ title: game.text(state.language, "claimed") + " · " + game.text(state.language, result.coupon.id === "photo" ? "couponPhoto" : result.coupon.id === "food" ? "couponFood" : "couponSouvenir"), icon: "none" });
      }
    },
    onGiftRedeem() {
      const result = game.registerGift();
      const state = game.loadState();
      if (result.error === "incomplete") {
        wx.showToast({ title: game.text(state.language, "finishRouteFirst"), icon: "none" });
        return;
      }
      this.refresh();
      wx.showToast({ title: game.text(state.language, "registered"), icon: "none" });
    },
    onResetProgress() {
      const state = game.loadState();
      wx.showModal({
        title: game.text(state.language, "reset"),
        content: game.text(state.language, "resetQuestion"),
        success: (result) => {
          if (result.confirm) {
            game.resetCurrentRole();
            this.setData({ selectedAnswer: -1 });
            this.refresh();
            wx.showToast({ title: game.text(state.language, "resetDone"), icon: "none" });
          }
        }
      });
    },
    onOpenMap() {
      wx.openLocation({
        latitude: 39.803676,
        longitude: 98.224201,
        scale: 16,
        name: "嘉峪关关城景区",
        address: "甘肃省嘉峪关市峪泉镇"
      });
    }
  };
  return Object.assign(page, additions);
}

module.exports = { createPage };
