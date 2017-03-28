/* eslint-disable */
{
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
        baseDir: './app/**/**',
        index: 'index.html'
      },
      port: process.env.PORT || 9000
    });
  });
}
