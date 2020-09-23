var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	bundle = require('gulp-bundle-file'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify')	



var config = {
	SCSS : '_scss/**/main.scss',
	ALLSCSS : '_scss/**/*.scss',
	BUILDCSS : 'assets/dest',
	MINCSS : '.min.css',
	APPJS : 'assets/js/app.js',
	ALLJS : 'assets/js/**/*.js',
	BUILDJS : 'assets/dest',
	MINJS : '.min.js',
	
}

var bundlefind = {
	CssBundlePath : 'bundle.config/lib.css.bundle',
	CssPath : 'assets/dest',
	JsBundlePath : 'bundle.config/lib.js.bundle',
	JsPath : 'assets/dest',
} 

gulp.task('lib.css.bundle',function(){
	return gulp.src(bundlefind.CssBundlePath)
	.pipe(bundle.concat())
	.pipe(gulp.dest(bundlefind.CssPath))
	})

gulp.task('lib.js.bundle', function(){
	return gulp.src(bundlefind.JsBundlePath)
	.pipe(bundle.concat())
	.pipe(gulp.dest(bundlefind.JsPath))
	})

gulp.task('sass',function(fd){
	return gulp.src(config.SCSS)
	.pipe(sass({
		outputStyle : 'expanded'
		}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(gulp.dest(config.BUILDCSS))
	.pipe(cssmin())
	.pipe(rename({
		extname : config.MINCSS
		}))
	.pipe(gulp.dest(config.BUILDCSS))
	fd()
	})

gulp.task('scripts',function(){
	return gulp.src(config.APPJS)
	.pipe(uglify())
	.pipe(rename({
		extname : config.MINJS
		}))
	.pipe(gulp.dest(config.BUILDJS))
	})


gulp.task('watch', function(fd){
	gulp.watch(config.ALLSCSS,['sass'])
	gulp.watch(config.ALLJS,['scripts'])
	})


gulp.task('default',['sass','watch','scripts']);