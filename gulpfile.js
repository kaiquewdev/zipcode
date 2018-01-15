const gulp = require('gulp');
const bro = require('gulp-bro');

gulp.task('build', () => {
	gulp.src('zipcode.js')
			.pipe(bro())
			.pipe(gulp.dest('dist'));
});

gulp.task('default', ['build'])