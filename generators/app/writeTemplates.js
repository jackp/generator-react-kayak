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

    this.fs.copyTpl(
      this.templatePath("src/index.js"),
      this.destinationPath("src/index.js"),
      {
        options: this.options
      }
    );
  },
  copyAppComponent: function() {
    this.fs.copyTpl(
      this.templatePath("src/components/App.js"),
      this.destinationPath("src/components/App.js"),
      { options: this.options }
    );
    this.fs.copy(
      this.templatePath("src/components/App.test.js"),
      this.destinationPath("src/components/App.test.js")
    );
  },
  copyStaticFiles: function() {
    this.directory("src/actions", this.destinationPath("src/actions"));
    this.directory("src/assets", this.destinationPath("src/assets"));
    this.directory("src/components/errors", this.destinationPath("src/components/errors"));
    this.directory("src/components/example", this.destinationPath("src/components/example"));
    this.directory("src/components/header", this.destinationPath("src/components/header"));
    this.directory("src/components/home", this.destinationPath("src/components/home"));
    this.directory("src/components/shared", this.destinationPath("src/components/shared"));
    this.directory("src/components/sidebar", this.destinationPath("src/components/sidebar"));
    this.directory("src/mixins", this.destinationPath("src/mixins"));
    this.directory("src/stores", this.destinationPath("src/stores"));
    this.directory("src/styles", this.destinationPath("src/styles"));

    this.fs.copy(
      this.templatePath("src/components/View.js"),
      this.destinationPath("src/components/View.js")
    );
    this.fs.copy(
      this.templatePath("src/components/View.test.js"),
      this.destinationPath("src/components/View.test.js")
    );
  }
};
