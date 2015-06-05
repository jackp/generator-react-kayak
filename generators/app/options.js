/**
 * Get Application Options
 */
var _ = require("lodash");

module.exports = {
  getAppName: function() {
    var done = this.async();

    this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Defaults to current folder name
      }
    ], function(answers) {
      this.appname = _.capitalize(_.camelCase(answers.name));
      done();
    }.bind(this));
  }
};
