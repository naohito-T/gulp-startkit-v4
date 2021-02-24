const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("default", () => {
  return gulp.watch("./src/sass/*.scss", () => {
    return gulp
      .src("./src/sass/**/*.scss")
      .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
      .pipe(gulp.dest("./public/css"));
  });
});
