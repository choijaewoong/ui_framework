var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    cleanCss = require('gulp-clean-css'),
    concatCss = require('gulp-concat-css');

var PATHS = {};
PATHS.css = ['./assets/css/partials/_reset.css',
             './assets/css/partials/_global.css',
             './assets/css/partials/!(_global|_reset|_responsive)*.css',
             './assets/css/partials/*/**/*.css',
             './assets/vendors/**/*.css',
             './assets/css/partials/_responsive.css'];

gulp.task('concatCss', function() {
    return gulp.src(PATHS.css)
                .pipe(concatCss("style.css"))
                .pipe(cleanCss())
                .pipe(gulp.dest("./assets/css/"));
});

gulp.task('nodemon', function() {

    return nodemon({
        script: './server.js',
        ext: 'js'
    }).on('restart', ['concatCss']);
});

gulp.task('default', gulp.series('nodemon'));