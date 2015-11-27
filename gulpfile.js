var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var ngTemplate = require('gulp-angular-templatecache');
var merge = require('merge-stream');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

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
            module: "wt.editor.tpl",
            standalone:true
        }))
        .pipe(gulp.dest('src'));
});

gulp.task('templates:dist', function () {
    return gulp.src('src/tpl/*.html')
        .pipe(ngTemplate("wt-editor.tpl-min.js", {
            root  : "wt-editor",
            module: "wt.editor.tpl"
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));  // output file: 'dist/js/templates.js'
});

gulp.task('scripts:dev', function () {
    return gulp.src(paths.scripts)
        .pipe(concat('wt-editor.js'))
        .pipe(gulp.dest('src'));
});
//gulp.task('scripts:dist', function () {
//    return gulp.src(paths.scripts)
//        .pipe(uglify())
//        .pipe(concat('wt-editor-min.js'))
//        .pipe(gulp.dest('dist'));
//});

gulp.task('scripts:dist', ['templates:dev'],function () {
    return gulp.src(paths.scripts.concat(["src/wt-editor.tpl.js"]))
        .pipe(uglify())
        .pipe(concat('wt-editor-min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('lessc:dev', function () {
    return gulp.src('./src/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('lessc:dist', function () {
    return gulp.src('./src/css/*.less')
        .pipe(less())
        .pipe(concat('all-min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade : false
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist'));

});


// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['scripts:dev']);
    gulp.watch(paths.scripts, ['templates:dev']);
    gulp.watch(paths.less, ['lessc:dev']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts:dev', 'templates:dev', 'lessc:dev']);

gulp.task('build', ['clean','watch', 'scripts:dist', 'lessc:dist','templates:dist']);