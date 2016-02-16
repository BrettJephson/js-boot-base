var gulp = require('gulp');
var jshint = require('gulp-jshint');
var colors = require('colors');

colors.setTheme({
    error: 'red'
});

function lint(src) {
    return gulp.src(src)
        .pipe(jshint({verbose: true}))
        .pipe(jshint.reporter('default'));
}

gulp.task('lint', function(src) {
    return lint('src/index.js');
});

gulp.task('lint4ci', function() {
    return lint('src/index.js')
        .pipe(jshint.reporter('fail'))
        .on('error', function() {
            console.error("JSHint failed".error);
            process.exit(1);
        });
});
