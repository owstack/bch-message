'use strict';
var gulp = require('gulp');
var owsTasks = require('ows-build');
owsTasks('bch', 'message');
gulp.task('default', ['lint', 'coverage']);
