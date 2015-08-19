var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var paths = {
    scripts: ['src/*.js'],
    less: ['css/*.less'],
    images: 'css/img/**/*'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function (cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['dest'], cb);
});

gulp.task('scripts', ['clean'], function () {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        //.pipe(sourcemaps.init())
        .pipe(concat('wt-editor.js'))
        .pipe(gulp.dest('dest'))
        .pipe(concat('wt-editor.min.js'))
        .pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('dest'));
});

// Copy all static images
gulp.task('lessc', function () {
    return gulp.src('./css/main.less')
        .pipe(less())
        .pipe(gulp.dest('./css/'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.less, ['lessc']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'lessc']);