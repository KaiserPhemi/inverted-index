{
	/* Grab required dependencies */
	require('dotenv').config();
	const express 	= require('express'),
		  path 		= require('path'),
		  app 		= express(),
		  port 		= 7000; 

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
	});

	/* Listening on port */
	app.listen(process.env.PORT || port, ()=>{
	    console.log(`App listening on port ${port}`);
	})
}