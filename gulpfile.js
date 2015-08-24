var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var ngTemplate = require('gulp-angular-templatecache');
var merge = require('merge-stream');

var paths = {
    scripts: ['src/js/*.js'],
    less   : ['src/css/*.less'],
    tpl    : ['src/tpl/*.html']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function (cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['dest'], cb);
});

gulp.task('templates:dev', function () {
    return gulp.src(paths.tpl)
        .pipe(ngTemplate("wt-editor.tpl.js", {
            root  : "wt-editor",
            module: "wt.editor.tpl"
        }))
        .pipe(gulp.dest('src/js'));
});

gulp.task('templates:dist', function () {
    return gulp.src('src/tpl/*.html')
        .pipe(ngTemplate("wt-editor.tpl.js", {
            root  : "wt-editor",
            module: "wt.editor.tpl"
        }))
        .pipe(gulp.dest('dist'));  // output file: 'dist/js/templates.js'
});

gulp.task('scripts:dev', function () {
    return gulp.src(paths.scripts)
        .pipe(concat('wt-editor.js'))
        .pipe(gulp.dest('src/js'));
});

gulp.task('scripts:build', ['clean'], function (result) {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src('src/tpl/*.html')
        .pipe(ngTemplate("wt-editor.tpl.js", {
            root  : "wt-editor",
            module: "wt.editor.tpl"
        }))
        .src(paths.scripts)
        .pipe(concat('wt-editor.js'))
        .pipe(gulp.dest('dest'));
    var js = gulp.src(paths.scripts)
        .pipe(concat('wt-editor.js'));

    return merge(tpl, js)
        .pipe(gulp.dest('dest'));
    //.pipe(concat('wt-editor.min.js'))
    //.pipe(uglify())
    //.pipe(gulp.dest('dest'));
});

// Copy all static images
gulp.task('lessc:dev', function () {
    return gulp.src('./src/css/main.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css/'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['scripts:dev']);
    gulp.watch(paths.less, ['lessc:dev']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts:dev', 'templates:dev', 'lessc:dev']);

gulp.task('build', ['watch', 'scripts', 'lessc']);