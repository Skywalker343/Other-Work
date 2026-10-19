const common = require("../../utils/page");
Page(common.createPage("task-detail", {
  onLoad(options) {
    this.taskId = options.id || "";
    this.setData({ selectedAnswer: -1 });
  }
}));
