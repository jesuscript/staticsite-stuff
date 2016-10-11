var gulp = require('gulp'),
    del = require('del'),
    serve = require('gulp-serve'),
    ssg = require('gulp-static-site-generator');

gulp.task('clean', function(done) {
  del('./dist').then(function() {
    done();
  });
});

gulp.task('build', ['clean'], function() {
  return gulp.src(['./src/pages/**/*', './src/images/**/*'])
    .pipe(ssg({
      jadeOptions: {
        pretty: true
      }
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['serve'], function(){
  gulp.watch('./src/**/*', ['build'])
})

gulp.task('serve', ['build'], serve({
  root: './dist',
  port: 9000
}));

gulp.task('default', ['build'])
