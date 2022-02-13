const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const concat = require('gulp-concat');
const replace = require('gulp-replace');

gulp.task('clean', function (cb) {
    del(['dist/*']);
    cb();
})

gulp.task('sass', function (cb) {
    gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
    cb();
})

gulp.task('copy:html', function (cb) {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
    cb();
})

gulp.task('copy:js', function (cb) {
    gulp.src('./src/logic/**.js')
        .pipe(replace(/((const { inputValueSet, setHTMLValue, inputValueGet, addListener, randomNumber, inputDisabled }).*)/, '//replace'))
        .pipe(replace(/((const { isValidInput } = require).*)/, '//replace'))
        .pipe(replace(/((const { isValidAnswer } = require).*)/, '//replace'))
        .pipe(replace(/((module.exports = { isValidInput }).*)/, '//replace'))
        .pipe(replace(/((module.exports = { isValidAnswer }).*)/, '//replace'))
        .pipe(replace(/((module.exports = { inputValueSet, setHTMLValue, inputValueGet, addListener, randomNumber, inputDisabled };).*)/, '//replace'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
    cb();
})

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.html', './src/**/*.scss', './src/**/*.js'], gulp.series(['clean', 'sass', 'copy:html', 'copy:js']));
})

gulp.task('default', gulp.series(['clean', 'sass', 'copy:html', 'copy:js']))