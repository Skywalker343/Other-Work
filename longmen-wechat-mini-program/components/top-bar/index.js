Component({
  properties: {
    language: { type: String, value: "zh" },
    brand: { type: String, value: "嘉峪关文物景区" },
    appTitle: { type: String, value: "龙门令" },
    roleLabel: { type: String, value: "游客身份" },
    languageButton: { type: String, value: "EN" },
    chooseIdentity: { type: String, value: "选择游戏身份" }
  },
  methods: {
    onLanguageTap() {
      this.triggerEvent("togglelanguage");
    },
    onIdentityTap() {
      this.triggerEvent("switchidentity");
    }
  }
});
