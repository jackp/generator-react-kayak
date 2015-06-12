/**
 * Copy configuration files
 */
module.exports = {
  copyStaticConfig: function() {
    this.fs.copy(this.templatePath("_eslintrc"), this.destinationPath(".eslintrc"));
    this.fs.copy(this.templatePath("_gitignore"), this.destinationPath(".gitignore"));
    this.fs.copy(this.templatePath("README.md"), this.destinationPath("README.md"));
    this.fs.copy(this.templatePath("webpack.config.js"), this.destinationPath("webpack.config.js"));
    this.fs.copy(this.templatePath("webpack.dist.config.js"), this.destinationPath("webpack.dist.config.js"));
    this.fs.copy(this.templatePath("jest-preprocessor.js"), this.destinationPath("jest-preprocessor.js"));
  },
  copyGulpTasks: function() {
    this.directory("tasks", this.destinationPath("tasks"));
    this.fs.copy(this.templatePath("gulpfile.js"), this.destinationPath("gulpfile.js"));
  },
  writePackageInfo: function() {
    this.fs.copyTpl(
      this.templatePath("_package.json"),
      this.destinationPath("package.json"),
      {
        appname: this.appname
      }
    );
  }
};
