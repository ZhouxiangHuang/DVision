var express = require('express');
var path = require('path');
var open = require('open');
var dvisionserver = express();


dvisionserver.get(/.html$|.css$|.js$/, function(req, res){
  //file paths will need to change to navigate out of user npm_modules directory
  if(req.url==='/index.html'){
    res.sendFile(path.join(__dirname + '/index.html'));
  } else{
    res.sendFile(path.join(__dirname + req.url));
  }
});

//new port established for hosting and rendering database tables
var port = 10001;
dvisionserver.listen(port, function() {
  console.log('dvision server listening on port ' + port);
  open('http://localhost:'+port+'/index.html');
})
