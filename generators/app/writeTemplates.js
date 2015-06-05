/**
 * Write templates
 */
module.exports = {
  writePackageJSON: function() {
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"),
      { appname: this.appname }
    );
  },
  writeIndexHTML: function() {
    this.fs.copyTpl(
      this.templatePath("index.html"),
      this.destinationPath("src/index.html"),
      { title: this.appname + ": React App" }
    );
  },
  copyIndexJS: function() {
    this.fs.copy(
      this.templatePath("index.js"),
      this.destinationPath("src/index.js")
    );
  },
  copyActions: function() {
    this.directory("actions", this.destinationPath("src/actions"));
  },
  copyAssets: function() {
    this.directory("assets", this.destinationPath("src/assets"));
  },
  copyComponents: function() {
    // These will likely be broken out into templates
    this.directory("components", this.destinationPath("src/components"));
  },
  copyMixins: function() {
    this.directory("mixins", this.destinationPath("src/mixins"));
  },
  copyStores: function() {
    this.directory("stores", this.destinationPath("src/stores"));
  }
};
