/**
 * Dependencies added
 * @type {Object}
 */
const connect = require('connect'),
  serve = require('serve-static'),
  port = process.env.PORT || 7000;

connect().use(serve('./app')).listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
