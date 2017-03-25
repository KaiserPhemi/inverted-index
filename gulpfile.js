{
<<<<<<< HEAD
	/* Grab our dependencies */
	const gulp  = require('gulp'),
	      sync =require('browser-sync').create(),
	      uglify = require('gulp-uglify'),
	      watch = require('gulp-watch');

	/* Default task */
	gulp.task('default', ['sync', 'watch', 'js'], () => {
		gulp.watch(files.js, ['js', sync.reload()]);
		gulp.watch(file.html, ['html', sync.reload()]);
	});

	/* Task to reload for every change */
	gulp.task('watch', () => {
		gulp.watch(['app/*.html', 'app/js/*.js', 'app/css/*.csss'])
			.on('change', sync.reload());
	});

	/* Task to minify all javascript files */
	gulp.task('js', () =>{
		return gulp.src('app/js/*.js')
				.pipe(uglify())
				.pipe(gulp.dest('lib'));
	});

	/* Adds html files to the mninification  */
	/*gulp.task('html', () =>{
		return gulp.src('app/*.html')
					.pipe(gulp.dest('lib'));
	});*/

	/* Create a task to watch for file changes */
	gulp.task('sync', () => {
		sync.init({
			server:{
				baseDir: './'
			},
			port:8000
		});
	});
=======
  /**
   * Gulpfile that watches for file changes and reloads page
   * @type {[type]}
   */
  const gulp = require('gulp'),
    pageSync = require('browser-sync').create(),
    watch = require('gulp-watch');

  /* create a default task */
  gulp.task('default', ['watch']);

  /** Task to reload for every change */
  gulp.task('watch', ['sync'], () => {
    gulp.watch('app/*html', pageSync.reload)
        .watch('app/js/*.js', pageSync.reload)
        .watch('app/css/*.css', pageSync.reload);
  });

  /* Create a task to watch for file changes */
  gulp.task('sync', () => {
    pageSync.init({
      server: {
        baseDir: './app',
        index: 'index.html'
      },
      port: process.env.PORT || 7000
    });
  });
>>>>>>> development
}
