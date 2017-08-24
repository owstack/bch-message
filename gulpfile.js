'use strict';

var gulp = require('gulp');
var bcccoreTasks = require('bcccore-build');

bcccoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
