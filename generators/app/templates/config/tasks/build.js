/**
 * Process files via webpack
 */
var gulp = require("gulp");
var path = require("path");
var gutil = require("gulp-util");
var htmlReplace = require("gulp-html-replace");

var webpack = require("webpack");
var distConfig = require("../webpack.dist.config.js");

gulp.task("build", ["clean:dist"], function(cb) {
  webpack(distConfig, function(err, stats) {
    if(err) { throw new gutil.PluginError("webpack", err); }

    gutil.log("[webpack]", stats.toString());

    // Strip dev dependencies from index.html
    gulp.src(path.resolve(process.cwd(), "dist/index.html"))
      .pipe(htmlReplace({
        "dev-only": ""
      }))
      .pipe(gulp.dest("./dist"));

    cb();
  });
});
