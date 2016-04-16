var Sequelize = require('sequelize');
const fs = require('fs');
const pg = require('pg');
const uri = 'postgres://soloprojectuser:letmein@localhost/soloproject';



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
}).then(function(names) {
  for(var i = 0; i < names.length; i++) {
    var command = "SELECT * FROM " + names[i];
    db.query(command, (err, result) => {
      console.log("database      ", result.rows);

      fs.writeFile('./sample2.json', JSON.stringify(result.rows), function(){
        console.log("Finished creating file");
        db.end();
      });
      });
    }
  })
})
