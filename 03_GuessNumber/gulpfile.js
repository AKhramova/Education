const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

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
    gulp.src('./src/**/**.js')
        .pipe(gulp.dest('./dist'))
    cb();
})
gulp.task('watch', function () {
    gulp.watch(['./src/**/*.html', './src/**/*.scss', './src/**/*.js'], gulp.series(['clean', 'sass', 'copy:html', 'copy:js']));
})

gulp.task('default', gulp.series(['clean', 'sass', 'copy:html', 'copy:js']))