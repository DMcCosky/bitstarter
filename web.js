var express = require('express');
var app = express();
app.use(express.logger());
fs = require('fs');
var varout = fs.readFileSync('index.html', 'utf-8');

app.get('/', function(request, response) {
  response.send(varout);
})

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
