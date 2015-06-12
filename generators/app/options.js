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
    },
    {
      type: "list",
      name: "showExamples",
      message: "Would you like to include example components in your app or have a barebones boilerplate?",
      choices: [
        { name: "Yes, provide me with some examples", value: true },
        { name: "No, barebones please", value: false }
      ],
      default: true
    }
  ], function(answers) {
    this.appname = _.capitalize(_.camelCase(answers.name));
    this.options = answers;

    done();
  }.bind(this));
};
