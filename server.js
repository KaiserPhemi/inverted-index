{
	/* Grab required dependencies */
	require('dotenv').config();
	const express 	= require('express'),
		  path 		= require('path'),
		  app 		= express(),
		  port 		= 7000; 

	app.get('*', (request, response) => {
	    response.sendFile(path.join(__dirname, 'lib/index.html'));
	});

	/* Listening on port */
	app.listen(process.env.PORT || port, ()=>{
	    console.log(`App listening on port ${port}`);
	})
}