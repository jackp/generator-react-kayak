/**
 * Write templates
 */
module.exports = {
  copyIndexFiles: function() {
    this.fs.copyTpl(
      this.templatePath("src/index.html"),
      this.destinationPath("src/index.html"),
      { title: this.appname + ": React Kayak" }
    );

    this.fs.copy(
      this.templatePath("src/index.js"),
      this.destinationPath("src/index.js")
    );
  },
  copyStaticFiles: function() {
    this.directory("src/actions", this.destinationPath("src/actions"));
    this.directory("src/assets", this.destinationPath("src/assets"));
    this.directory("src/components", this.destinationPath("src/components"));
    this.directory("src/mixins", this.destinationPath("src/mixins"));
    this.directory("src/stores", this.destinationPath("src/stores"));
    this.directory("src/styles", this.destinationPath("src/styles"));
  }
};
