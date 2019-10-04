module.exports = function() {
    $.gulp.task('video:copy', function() {
        return $.gulp.src('./dev/static/video/**/*.*')
        .pipe($.gulp.dest('./build/static/video/'));
    });
};