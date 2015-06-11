/**
 * Get Application Options
 */
var _ = require("lodash");

module.exports = function() {
  var done = this.async();

  this.prompt([
    {
      type: "input",
      name: "name",
      message: "Your project name",
      default: this.appname // Defaults to current folder name
    },
    {
      type: "list",
      name: "styleFramework",
      message: "Which style framework would you like to use?",
      choices: [
        { name: "Material-UI", value: "material" },
        "None"
      ],
      default: "material"
    }
  ], function(answers) {
    this.appname = _.capitalize(_.camelCase(answers.name));
    this.options = answers;

    done();
  }.bind(this));
};
