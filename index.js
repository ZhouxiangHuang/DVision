var express = require('express');
var path = require('path');
var open = require('open');
var dvisionserver = express();

// dvisionserver.use(express.static(__dirname + '/index.html'));

dvisionserver.get('/', function(req, res){
  res.sendFile(path.join(__dirname + req.url))
});

var port = 10001;
dvisionserver.listen(port, function() {
  console.log('dvision server listening on port ' + port);
  open('http://localhost:'+port);
})
