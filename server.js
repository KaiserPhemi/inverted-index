{
	/* Grab required dependencies */
	const connect	= require('connect'),
		  serve		= require('serve-static')
		  port 		= process.env.PORT || 7000; 

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	app.get('/', (request, response) => {
	    response.sendFile(path.join(__dirname, 'app/index.html'));
=======
	app.get('*', (request, response) => {
	    response.sendFile(path.join(__dirname, 'lib/index.html'));
>>>>>>> node modules installed
=======
	app.get('*', (request, response) => {
	    response.sendFile(path.join(__dirname, 'lib/index.html'));
>>>>>>> e0d1b649ed9beb3cbf30b8676d9ec0bd9eff3669
=======
	connect().use(serve('./app')).listen(port, () => {
		console.log(`Server running on port ${port}`);
>>>>>>> development
	});
}