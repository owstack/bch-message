'use strict';
var gulp = require('gulp');
var owsTasks = require('ows-build');
owsTasks('bcccore', 'message');
gulp.task('default', ['lint', 'coverage']);
