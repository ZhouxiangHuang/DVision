const express = require('express');
const path = require('path');
const open = require('open');
const dvisionserver = express();
const Sequelize = require('sequelize');
const fs = require('fs');
const pg = require('pg');
const uri = 'postgres://andrewburke:govisualizer@localhost/govisualizer';



dvisionserver.get(/.html$|.css$|.js$/, function(req, res) {
  //file paths will need to change to navigate out of user npm_modules directory
  if (req.url === '/index.html') {
    res.sendFile(path.join(__dirname + '/index.html'));
  } else {
    res.sendFile(path.join(__dirname + req.url));
  }
});

//new port established for hosting and rendering database tables
var port = 10001;
dvisionserver.listen(port, function() {
  console.log('dvision server listening on port ' + port);

})

//connect to user database, retrieve data, and prepare before writing to file accessable by App.js
pg.connect(uri, (err, db) => {
  console.log("CONNECTED TO DATABASE...");
  new Promise(function(resolve, reject) {
      db.query("SELECT * FROM information_schema.tables WHERE table_schema = 'public'", (err, result) => {
        var tablenames = [];
        for (var i = 0; i < result.rows.length; i++) {
          tablenames.push(result.rows[i].table_name);
        }
        resolve(tablenames);
      });
    })
    .then(function(names) {
      console.log("TABLENAMES: ", names);
      new Promise(function(resolve, reject) {
          var allTables = [];
          for (var i = 0; i < names.length; i++) {
            var command = "SELECT * FROM " + names[i];
            db.query(command, (err, result) => {
              console.log('I AM TRYING TO PUSH: ', JSON.stringify(result.rows).slice(0,20));
              allTables.push(result.rows);
              console.log("Finished creating table " + i);
              if(allTables.length===names.length){
                console.log('LENGTHS MATCHED!k!!!!!!!')
                resolve(allTables);
              }
            });

          }
        })
        .then(function(finalTablesFile) {
          console.log('FINAL TABLES FILE: ', finalTablesFile);
          fs.writeFile('./sample2.json', JSON.stringify(finalTablesFile), function() {
            console.log("Finished creating all tables");
            //once database retrieval occurs, database visualization launches in new browser window
            open('http://localhost:' + port + '/index.html');
          });
        });
    });
});
