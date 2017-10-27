'use strict';
var gulp = require('gulp');
var owsTasks = require('@owstack/ows-build');
owsTasks('bch', 'message');
gulp.task('default', ['lint', 'coverage']);
