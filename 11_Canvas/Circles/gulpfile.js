const del = require('del');
const gulp = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const copy = require('gulp-copy');
const through = require('through2');
const fileInclude = require('gulp-file-include');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const deleteLines = require('gulp-delete-lines');
const replace = require('gulp-replace');

const sass = gulpSass(dartSass);

const SRC = './src';
const BUILD = './build';
const PUBLIC = './public';

const paths = {
    build: {
        root: `${BUILD}/`,
        css: `${BUILD}/css/`,
        js: `${BUILD}/js/`,
        html: `${BUILD}/`
    },
    src: {
        scss: `${SRC}/scss/main.scss`,
        js: `${SRC}/js/*.js`,
        public: `${PUBLIC}/**/*`,
    },
    compileWatch: {
        scss: `${SRC}/scss/**/*.scss`,
        js: `${SRC}/js/**/*.js`,
        html: `${SRC}/html/*.html`,
    },
    reloadWatch: {
        css: `${BUILD}/**/*.css`,
        js: `${BUILD}/**/*.js`,
        html: `${BUILD}/*.html`,
    },
};

const styles = (paths, outputFilename, outputPath) => {
    return gulp
        .src(paths)
        .pipe(sass().on('error', sass.logError))
        .pipe(debug({title: 'scss:'}))
        .pipe(concat(outputFilename))
        .pipe(gulp.dest(outputPath));
};

const scripts = (paths, outputFilename, outputPath) => {
    return gulp
        .src(paths)
        .pipe(deleteLines({
            'filters': [
                /module.exports =/i
            ]
        }))
        .pipe(debug({title: 'js:'}))
        .pipe(babel({ presets: ['@babel/env'] }))
        
        .pipe(concat(outputFilename))
        .pipe(debug({title: 'jsconcat:'}))
        .pipe(gulp.dest(outputPath));
};

gulp.task('clean', (cb) => {
    del.sync([paths.build.root]/*, { dot: true }*/)
    cb()
});

gulp.task('copy', (cb) => {
    gulp
        .src(paths.src.public)
        .pipe(copy(paths.build.root, {prefix: 1}))
    cb()
});

gulp.task('styles', (cb) => {
    styles([paths.src.scss], 'styles.css', paths.build.css);
    cb();
});

gulp.task('scripts', (cb) => {
    scripts([paths.src.js], 'index.js', paths.build.js, false);
    cb();
});

gulp.task('fileInclude', (cb) => {
    gulp.src([SRC + '/html/index.html'])
        .pipe(fileInclude({prefix: '@@', basepath: '@file'}))
        .pipe(gulp.dest(BUILD));
    cb();
});

gulp.task('build', gulp.series('clean', 'fileInclude', gulp.parallel('copy', 'styles', 'scripts')));

gulp.task('watch', () => {
    gulp.watch(paths.compileWatch.html, gulp.series('fileInclude'));
    gulp.watch(paths.compileWatch.scss, gulp.series('styles'));
    gulp.watch(paths.compileWatch.js, gulp.series('scripts'));
});

gulp.task('serve', () => {
    browserSync.init({ server: { baseDir: './build/' } });
    browserSync.watch(paths.reloadWatch.css).on('change', browserSync.reload);
    browserSync.watch(paths.reloadWatch.js).on('change', browserSync.reload);
    browserSync.watch(paths.reloadWatch.html).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
