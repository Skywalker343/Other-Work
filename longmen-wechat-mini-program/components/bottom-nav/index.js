Component({
  properties: {
    language: { type: String, value: "zh" },
    active: { type: String, value: "identity" },
    hasRole: { type: Boolean, value: false }
  },
  data: {
    labels: {
      zh: { route: "路线", tasks: "任务", scan: "扫描", fragments: "碎片", rewards: "兑换" },
      en: { route: "Route", tasks: "Missions", scan: "Scan", fragments: "Fragments", rewards: "Rewards" }
    }
  },
  methods: {
    onNavigate(event) {
      this.triggerEvent("navigate", { target: event.currentTarget.dataset.target });
    }
  }
});
