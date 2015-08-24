var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var ngTemplate = require('gulp-angular-templatecache');

var paths = {
    scripts: ['src/js/*.js'],
    less: ['src/css/*.less'],
    tpl: ['src/tpl/*.html']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function (cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['dest'], cb);
});

gulp.task('templates:dist', function() {
    gulp.src('src/tpl/*.html')
        .pipe(minifyHtml({empty: true, quotes: true}))
        .pipe(ngTemplate({
            moduleName: 'genTemplates',
            standalone: true,
            filePath: 'js/templates.js'
        }))
        .pipe(gulp.dest('dist'));  // output file: 'dist/js/templates.js'
});

gulp.task('scripts', ['clean'], function (result) {
    console.log(result);
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
    return gulp.src('./src/css/main.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css/'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.less, ['lessc']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'lessc']);

gulp.task('build', ['watch', 'scripts', 'lessc']);