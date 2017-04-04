/**
 * Gulpfile that watches for file changes and reloads page
 * @type {[type]}
 */
const gulp = require('gulp'),
  pageSync = require('browser-sync').create();

/**
 * Create a task to watch for file changes
 * @param  {String} 'sync' Identifier for browser-sync
 * @param  {[type]} (      [description]
 * @return {[type]}        [description]
 */
gulp.task('sync', () => {
  pageSync.init({
    server: {
      baseDir: 'app',
      index: 'index.html',
      port: process.env.PORT || 9000
    }
  });
});

/**
 * Create a default tasks
 * @param  {String} 'default' Identifier for default task
 * @param  {String} ['sync']  Identifier for browser-sync
 */
gulp.task('default', ['sync'], () => {
  gulp.watch('app/*.html', pageSync.reload);
  gulp.watch('app/js/*.js', pageSync.reload);
  gulp.watch('app/css/*.css', pageSync.reload);
  gulp.watch('spec/*.js', pageSync.reload);
});
