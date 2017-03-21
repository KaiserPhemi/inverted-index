{
	/* Grab our dependencies */
	const gulp  = require('gulp'),
	      sync =require('browser-sync').create(),
	      minify = require('gulp-uglify'),
	      watch = require('gulp-watch');

	/* create a default task */
	gulp.task('default', ['sync', 'watch'], () => {
		gulp.watch(files.js, ['js', sync.reload()]);
		gulp.watch(file.html, ['html', sync.reload()]);
	});

	/* Task to reload for every change */
	gulp.task('watch', () => {
		gulp.watch(['app/*html', 'app/js/*.js', 'app/css/*.csss'])
			.on('change', sync.reload());
	});

	/* Create a task to watch for file changes */
	gulp.task('sync', () => {
		sync.init({
			server:{
				baseDir: './'
			},
			port:7000
		});
	});
}
