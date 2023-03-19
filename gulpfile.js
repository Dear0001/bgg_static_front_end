"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var del = require('del');
gulp.task("sass", function () {
  return gulp
    .src("./clientLib/css/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./clientLib/css"));
});
gulp.task("component-sass", function () {
  return gulp
    .src("./components/**/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./components/"));
});
gulp.task("pages-sass", function () {
  return gulp
    .src("./pages/**/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./pages/"));
});
gulp.task('clean', () => {
  return del([
      './clientLib/css/**/*.css',
      '/components/**/**/*.css',
      './pages/**/**/*.css'
  ]);
});
gulp.task("watch", () => {
   browserSync.init({
      server: {
        baseDir: "./",
        index: "index.html"
      },
      ghostMode: false
    });
  
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./**/*.html").on("change", browserSync.reload);

  gulp.watch("./clientLib/css/**/*.scss", gulp.series("sass"));
  gulp.watch("./components/**/**/*.scss", gulp.series("component-sass"));
  gulp.watch("./pages/**/**/*.scss", gulp.series("pages-sass"));
});
