const express = require('express');

const app = express();

app.get('/', function(req, res){
	res.send("Index page");
});


app.listen(3000, function(){
	console.log("App running at http//:localhost:3000");
})