module.exports = function() {
    $.gulp.task('video:copy', function() {
        return $.gulp.src('./src/static/**/*.mp4')
        .pipe($.gulp.dest('./dist/static/video/'));
    });
};