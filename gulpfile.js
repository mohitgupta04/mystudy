// initialize

var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concatCss = require('gulp-concat-css');

 //Task creation

gulp.task('css', function(){
  return gulp.src('less/*.less')
    .pipe(less())
     
    .pipe(concatCss('css.css'))
    .pipe(gulp.dest('css/'))
     .pipe(minifyCSS())
     .pipe(gulp.dest('build/css'))
});


//watch
 gulp.task('watch', function(){
 	gulp.watch('less/*.less', ['css'])
 })


 //run
gulp.task('default', [ 'css', 'watch' ]);