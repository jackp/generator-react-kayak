/**
 * Preview production environment
 */
var gulp = require("gulp");
var path = require("path");
var webserver = require("gulp-webserver");

gulp.task("preview", ["build"], function() {
  gulp.src(path.resolve(process.cwd(), "dist"))
    .pipe(webserver({
      port: 3001,
      fallback: "index.html",
      open: true
    }));
});
