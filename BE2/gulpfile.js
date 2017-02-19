var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var csshint = require('gulp-csslint');

gulp.task('jshint', function(){
  return gulp.src('client/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter());
});

gulp.task('csshint', function(){
  return gulp.src('client/css/*.css')
    .pipe(csshint())
    .pipe(csshint.formatter());
});

gulp.task('start', function () {
  nodemon({
    script: 'test.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('default', ['start'], function () {
  gulp.watch('client/js/*.js', ['jshint']);
  gulp.watch('client/css/*.css', ['csshint']);
});
