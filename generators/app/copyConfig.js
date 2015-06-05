/**
 * Copy configuration files
 */
module.exports = {
  copyConfig: function() {
    this.directory("config", this.destinationRoot());
  },
  copyStyles: function() {
    this.directory("styles", this.destinationPath("src/styles"));
  }
};
