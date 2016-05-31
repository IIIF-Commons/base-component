var concat = require('gulp-concat');
var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var merge = require('merge2');
var path = require('path');

gulp.task('concat', function(cb) {   
    return merge([
        gulp.src(config.concatDeps.concat(path.join(config.dist, config.jsOut)))
            .pipe(concat(config.jsOut))
            .pipe(gulp.dest(config.dist)),
        gulp.src(config.concatTypings.concat(path.join(config.dist, config.dtsOut)))
            .pipe(concat(config.dtsOut))
            .pipe(gulp.dest(config.dist))
    ]);
});