/**
 * Clean /dist folder
 */
var gulp = require("gulp");
var del = require("del");

gulp.task("clean:dist", function(cb) {
  del(["dist/**/*"], cb);
});
