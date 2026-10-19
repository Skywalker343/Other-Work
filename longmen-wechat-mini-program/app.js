App({
  onLaunch() {
    const state = wx.getStorageSync("longmen-mini-state-v1");
    if (!state) {
      wx.setStorageSync("longmen-mini-state-v1", {
        language: "zh",
        role: null,
        name: "",
        saves: {
          guard: { done: [], redeemed: [], gift: false },
          caravan: { done: [], redeemed: [], gift: false }
        }
      });
    }
  }
});
