const game = require("../../utils/game");

Component({
  properties: {
    language: { type: String, value: "zh" },
    image: { type: String, value: "/images/scene-east-gate.webp" },
    place: { type: String, value: "" },
    hint: { type: String, value: "" },
    isComplete: { type: Boolean, value: false }
  },
  observers: {
    language() {
      this.setData({ locationLabel: game.text(this.data.language, "locate") });
      if (!this.data.scannerVisible) this.setData({ scanStatus: game.text(this.data.language, "scanDemo") });
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        locationLabel: game.text(this.data.language, "locate"),
        scanStatus: game.text(this.data.language, "scanDemo")
      });
    }
  },
  data: {
    scannerVisible: false,
    scanStatus: "",
    locationLabel: ""
  },
  methods: {
    openScanner() {
      this.setData({
        scannerVisible: true,
        scanStatus: this.data.isComplete
          ? game.text(this.data.language, "scanDone")
          : game.text(this.data.language, "scanDemo")
      });
    },
    closeScanner() {
      this.setData({ scannerVisible: false });
    },
    stopTap() {},
    onScanCode() {
      wx.scanCode({
        onlyFromCamera: true,
        scanType: ["qrCode"],
        success: (result) => {
          this.setData({ scannerVisible: false });
          this.triggerEvent("cluefound", { code: result.result || "" });
        },
        fail: (error) => {
          const message = String((error && error.errMsg) || "");
          if (message.toLowerCase().indexOf("cancel") >= 0) return;
          wx.showToast({ title: game.text(this.data.language, "scanFailed"), icon: "none" });
        }
      });
    },
    onSimulateScan() {
      this.setData({ scannerVisible: false });
      this.triggerEvent("cluefound", { code: "", simulated: true });
    },
    onLocate() {
      wx.getLocation({
        type: "gcj02",
        isHighAccuracy: true,
        success: () => {
          this.setData({ locationLabel: game.text(this.data.language, "located") });
          wx.showToast({ title: game.text(this.data.language, "located"), icon: "success" });
        },
        fail: () => {
          wx.showToast({ title: game.text(this.data.language, "locationDenied"), icon: "none" });
        }
      });
    }
  }
});
