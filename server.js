{
	/* Grab required dependencies */
	const connect	= require('connect'),
		  serve		= require('serve-static')
		  port 		= process.env.PORT || 7000; 

	connect().use(serve('./app')).listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
}