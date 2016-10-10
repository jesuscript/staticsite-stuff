var gulp = require('gulp'),
    ssg = require('gulp-static-site-generator');

var options = {
  // your custom options
  
};

gulp.task('build', function() {
  return gulp.src('./src/site/**/*')
    .pipe(ssg(options))
    .pipe(gulp.dest('./dest'));
});

gulp.task('default', ['build'])
