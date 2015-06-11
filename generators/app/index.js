var generators = require("yeoman-generator");

var getApplicationOptions = require("./options");
var copyConfig = require("./copyConfig");
var writeTemplates = require("./writeTemplates");

module.exports = generators.Base.extend({
  initializing: {},
  prompting: getApplicationOptions,
  configuring: copyConfig,
  writing: writeTemplates,
  install: {
    npm: function() {
      this.log("Installing NPM dependencies...");
      this.npmInstall();
    }
  },
  end: {}
});
