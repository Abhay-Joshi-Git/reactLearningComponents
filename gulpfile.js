var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');

gulp.task('browserify', function() {
    browserify('./src/js/main.jsx')
        .transform('reactify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy',function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/main.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('serve', function() {
    connect.server({
        root: 'dist'
    });
});

gulp.task('default', ['browserify', 'copy', 'serve'], function() {
    return gulp.watch('src/**/*.*', ['browserify', 'copy'])
});