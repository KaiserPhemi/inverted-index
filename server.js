/**
 * Dependencies added
 * @type {Object}
 */
const connect = require('connect'),
    serve   = require('serve-static')
    port    = process.env.PORT || 7000; 

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'app/index.html'));

connect().use(serve('./app')).listen(port, () => {
  console.log(`Server running on port ${port}`);
});