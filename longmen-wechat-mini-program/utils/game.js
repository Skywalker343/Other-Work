const roleData = require("./game-data");
const i18n = require("./i18n");

const STORAGE_KEY = "longmen-mini-state-v1";
const initialState = {
  language: "zh",
  role: null,
  name: "",
  saves: {
    guard: { done: [], redeemed: [], gift: false },
    caravan: { done: [], redeemed: [], gift: false }
  }
};

const coupons = [
  { id: "photo", titleKey: "couponPhoto", detailKey: "couponPhotoDetail", cost: 60, icon: "◎" },
  { id: "food", titleKey: "couponFood", detailKey: "couponFoodDetail", cost: 45, icon: "◌" },
  { id: "souvenir", titleKey: "couponSouvenir", detailKey: "couponSouvenirDetail", cost: 80, icon: "✦" }
];

const glyphsEn = {
  g1: ["E", "Entry"], g2: ["O", "Order"], g3: ["W", "Watch"], g4: ["G", "Guard"], g5: ["S", "Seal"],
  c1: ["T", "Trade"], c2: ["P", "Papers"], c3: ["R", "Trail"], c4: ["P", "Pass"], c5: ["S", "Seal"]
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  let stored = {};
  try {
    stored = wx.getStorageSync(STORAGE_KEY) || {};
  } catch (error) {}
  const state = Object.assign(clone(initialState), stored);
  state.saves = Object.assign(clone(initialState.saves), stored.saves || {});
  ["guard", "caravan"].forEach((key) => {
    state.saves[key] = Object.assign({ done: [], redeemed: [], gift: false }, state.saves[key] || {});
  });
  if (!i18n.copy[state.language]) state.language = "zh";
  return state;
}

function saveState(state) {
  try {
    wx.setStorageSync(STORAGE_KEY, state);
  } catch (error) {}
  return state;
}

function text(language, key) {
  return i18n.getText(language, key);
}

function localize(item, field, language) {
  if (language === "en" && item.en && item.en[field] !== undefined) return item.en[field];
  return item[field];
}

function assetPath(path) {
  return (path || "").replace(/^assets\//, "/images/");
}

function toTaskView(task, language, done) {
  const glyphInfo = glyphsEn[task.id] || ["✦", "Seal"];
  return Object.assign({}, task, {
    title: localize(task, "title", language),
    place: localize(task, "place", language),
    photo: localize(task, "photo", language),
    line: localize(task, "line", language),
    question: localize(task, "question", language),
    options: localize(task, "options", language),
    npcLine: localize(task, "npcLine", language),
    shardLabel: language === "en" ? glyphInfo[1] : task.shard,
    glyph: language === "en" ? glyphInfo[0] : task.icon,
    rewardLabel: done ? text(language, "claimed") : "+" + task.points + " " + text(language, "score"),
    rewardNote: done ? text(language, "fragmentCollected") : text(language, "pointsReward"),
    scene: assetPath(task.scene),
    done: !!done
  });
}

function getPoints(roleInfo, save) {
  if (!roleInfo || !Array.isArray(roleInfo.tasks)) return 0;
  return roleInfo.tasks.reduce((sum, task) => {
    return sum + (save.done.indexOf(task.id) >= 0 ? task.points : 0);
  }, 0);
}

function buildView(state, taskId) {
  const language = state.language || "zh";
  const role = state.role ? roleData[state.role] : null;
  const save = role ? state.saves[state.role] : { done: [], redeemed: [], gift: false };
  const rawTasks = role ? role.tasks : [];
  const tasks = rawTasks.map((task) => toTaskView(task, language, save.done.indexOf(task.id) >= 0));
  const selected = taskId ? tasks.find((task) => task.id === taskId) : null;
  const nextTask = tasks.find((task) => !task.done) || null;
  const stageTask = selected || nextTask;
  const roleView = role ? Object.assign({}, role, {
    label: localize(role, "label", language),
    name: localize(role, "name", language),
    route: localize(role, "route", language),
    motto: localize(role, "motto", language),
    npc: localize(role, "npc", language),
    duration: localize(role, "duration", language),
    portrait: assetPath(role.portrait),
    stops: language === "en" ? role.stopsEn : role.stops
  }) : null;
  const points = getPoints(role, save);
  const doneCount = save.done.length;
  const taskSlots = tasks.map((task, index) => ({
    id: task.id,
    glyph: task.done ? task.glyph : "·",
    label: task.done ? task.shardLabel : text(language, "tokenFragment") + " " + (index + 1),
    state: task.done ? text(language, "claimed") : text(language, "undiscovered"),
    found: task.done
  }));
  const couponViews = coupons.map((coupon) => ({
    id: coupon.id,
    icon: coupon.icon,
    title: text(language, coupon.titleKey),
    detail: text(language, coupon.detailKey),
    cost: coupon.cost,
    redeemed: save.redeemed.indexOf(coupon.id) >= 0,
    enough: points >= coupon.cost
  }));
  const stageImage = stageTask ? stageTask.scene : (role ? "/images/scene-pass.webp" : "/images/scene-east-gate.webp");
  const stagePlace = stageTask
    ? stageTask.place + (language === "en" ? " · site photo" : " · 景区实景")
    : (role ? text(language, "defaultPlace") : (language === "en" ? "East Gate · site photo" : "东闸门 · 景区实景"));
  const stageHint = stageTask
    ? (stageTask.done ? text(language, "clueDone") : text(language, "clueNearby"))
    : (role ? text(language, "relicComplete") : text(language, "nearbyHint"));
  return {
    language,
    ui: i18n.copy[language],
    name: state.name || text(language, "visitor"),
    playerName: state.name || "",
    role: roleView,
    roleKey: state.role,
    mapOverlay: state.role ? "/images/map-" + state.role + ".png" : "/images/map-guard.png",
    roleLabel: roleView ? roleView.label + " · " + (state.name || text(language, "visitor")) : text(language, "visitorIdentity"),
    tasks,
    optionLetters: ["A", "B", "C"],
    selectedTask: selected,
    nextTask,
    stageTask,
    stageImage,
    stagePlace,
    stageHint,
    points,
    completedCount: doneCount,
    totalTasks: tasks.length,
    progress: tasks.length ? Math.round(doneCount * 100 / tasks.length) : 0,
    isComplete: !!role && doneCount === tasks.length,
    taskSlots,
    coupons: couponViews,
    giftRegistered: !!save.gift
  };
}

function chooseRole(role, name) {
  const state = loadState();
  if (!roleData[role]) return state;
  state.role = role;
  state.name = (name || "").trim().slice(0, 16);
  return saveState(state);
}

function setName(name) {
  const state = loadState();
  state.name = (name || "").slice(0, 16);
  return saveState(state);
}

function toggleLanguage() {
  const state = loadState();
  state.language = state.language === "zh" ? "en" : "zh";
  return saveState(state);
}

function completeTask(role, id) {
  const state = loadState();
  if (!roleData[role] || !roleData[role].tasks.some((task) => task.id === id)) return null;
  const save = state.saves[role];
  if (save.done.indexOf(id) < 0) save.done.push(id);
  saveState(state);
  const task = roleData[role].tasks.find((item) => item.id === id);
  return { state, task, points: getPoints(roleData[role], save), complete: save.done.length === roleData[role].tasks.length };
}

function redeemCoupon(id) {
  const state = loadState();
  if (!state.role) return { error: "role" };
  const coupon = coupons.find((item) => item.id === id);
  const save = state.saves[state.role];
  if (!coupon) return { error: "missing" };
  if (save.redeemed.indexOf(id) >= 0) return { error: "used" };
  if (getPoints(roleData[state.role], save) < coupon.cost) return { error: "points" };
  save.redeemed.push(id);
  saveState(state);
  return { coupon, state };
}

function registerGift() {
  const state = loadState();
  if (!state.role) return { error: "role" };
  const role = roleData[state.role];
  const save = state.saves[state.role];
  if (save.done.length !== role.tasks.length) return { error: "incomplete" };
  save.gift = true;
  saveState(state);
  return { state };
}

function resetCurrentRole() {
  const state = loadState();
  if (!state.role) return state;
  state.saves[state.role] = { done: [], redeemed: [], gift: false };
  return saveState(state);
}

module.exports = {
  roleData, coupons, loadState, saveState, buildView, text, localize,
  chooseRole, setName, toggleLanguage, completeTask, redeemCoupon,
  registerGift, resetCurrentRole
};
