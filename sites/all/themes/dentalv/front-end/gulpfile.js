'use strict';

var gulp = require('gulp'),
  fs = require('fs'),
  pkg = JSON.parse(fs.readFileSync('package.json')),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  inject = require('gulp-inject'),
  concatCss = require('gulp-concat-css'),
  cleanCss = require('gulp-clean-css'),
  babel = require('gulp-babel'),
  rigger = require('gulp-rigger'),
  browserify = require('browserify'),

//const browserify = require('browserify');
 buffer = require('vinyl-buffer'),
 path = require('path'),
 source = require('vinyl-source-stream'),
 babelify = require('babelify');

var prName = pkg.name,
  WATCHING_CSS = [
    'sass/**/*',
    'sass/*'],
  OUTPUT_CSS = 'stylesheets/';

var WATCHING_JS = ['dev/javascript/*', 'dev/javascript/**/*'];

var WATCHING_HTML = ['dev/*.html', 'dev/template/*', 'dev/template/**/*'];

var COMPONENTS_CSS_LIST = [];

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  },
  autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
  };

// gulp.task('copy_fonts', function () {
// 	return gulp
// 		.src(['dev/fonts/*', 'dev/fonts/*/*', 'dev/fonts/*/*/*'])
// 		.pipe(gulp.dest('build/fonts/'))
// });
//
// gulp.task('copy_icons', function () {
// 	return gulp
// 		.src(['dev/icons/*', 'dev/icons/*/*', 'dev/icons/*/*/*'])
// 		.pipe(gulp.dest('build/icons/'))
// });
//
// gulp.task('copy_fav', function () {
// 	return gulp
// 		.src(['dev/icons/favicon/*'])
// 		.pipe(gulp.dest('build/html/'))
// });
//
// gulp.task('copy_images', function () {
// 	return gulp
// 		.src(['dev/images/*', 'dev/images/*/*', 'dev/images/*/*/*'])
// 		.pipe(gulp.dest('build/images/'))
// });

gulp.task('copy', ['copy_fonts', 'copy_icons', 'copy_images', 'copy_fav']);

gulp.task('html_build', function() {
	gulp.src('dev/*.html')
		.pipe(rigger())
		.pipe(gulp.dest('build/html/'))
});

gulp.task('sass', function () {
  return gulp
    .src('sass/constructor.*')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(rename('bundle.css'))
		.pipe(sourcemaps.write())
    .pipe(gulp.dest(OUTPUT_CSS))
    .resume();
});

gulp.task('css_concat', function () {
  return gulp
    .src(COMPONENTS_CSS_LIST)
    .pipe(concatCss(OUTPUT_CSS + "vendors.css", {rebaseUrls: false}))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(cleanCss({debug: true}, function (details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest(OUTPUT_CSS))
    .resume();
});

gulp.task('watch', ['sass'], function () {
  gulp.watch(WATCHING_CSS, ['sass'])
    .on('change', function (event) {
      console.log('Style file ' + event.path + ' was ' + event.type + ', running tasks...');
    });

//  gulp.watch(WATCHING_HTML, ['html_build'])
//		.on('change', function (event) {
//			console.log('Html file ' + event.path + ' was ' + event.type + ', running tasks...');
//		});
//
//  gulp.watch(WATCHING_JS, ['scripts']);
});

gulp.task('scripts', function() {
    // Single entry point to browserify 
   return browserify(["./dev/javascript/entry.js"])
        .transform(babelify.configure())
        .bundle()
        // .pipe(source('bundle-brow.js'))
        .pipe(source("entry.js"))
        .pipe(buffer())
        // .pipe(uglify())
        .pipe(rename("dental.min.js"))
        // .pipe(gulp.dest("./themes/" + prName + "/js/dist/"));
        .pipe(gulp.dest("./build/javascript/"));
        // .pipe(fs.createWriteStream("./themes/" + prName + "/js/dist/output.js"));
});

gulp.task('default', ['develop']);

gulp.task('develop', ['sass', 'css_concat', 'watch' ]);
