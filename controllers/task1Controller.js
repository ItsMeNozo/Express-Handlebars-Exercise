const controller = {};

controller.show = (req, res) => {
  let { emotions } = require("../data");
  res.locals.emotions = emotions;
  res.render("task1");
};

module.exports = controller;
