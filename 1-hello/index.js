var express = require('express');
var app = express();

var port = 3000;

app.get('/', function(request, response){
	response.send('<h1>hello coders tokyo</h1>');
});

app.get('/users', function(req, res){
	res.send('User list');
});

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});