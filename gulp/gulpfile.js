/*
* Dependencias
*/
var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
  	concat = require('gulp-concat'),
  	uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('default', function () {
  gulp.src('js/source/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(concat('todo.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/build/'))
});

//gulp.watch('js/source/*.js', ['default']);