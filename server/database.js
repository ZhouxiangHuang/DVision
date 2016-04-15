var Sequelize = require('sequelize');

const pg = require('pg');
const uri = 'postgres://dvision:division@localhost/dvisiondb';



pg.connect(uri, (err, db) => {
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
      });
    }
  })
})


var sequelize = new Sequelize('dvisiondb', 'dvision', 'division', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
  });

var User = sequelize.define('user', {
  un: Sequelize.STRING,
    pw: Sequelize.STRING,
    color1: Sequelize.STRING
});

// var Secondtable = sequelize.define('secondtable', {
//   un: Sequelize.STRING,
//     pw: Sequelize.STRING,
//     color1: Sequelize.STRING
// },
// {
//   freezeTableName: true,
//   tableName: 'secondtable'
// });


// Secondtable.sync({force: true}).then(function () {
//   return Secondtable.create({
//     un: "Mark",
//     pw: "This is Mark's password",
//     color1: "purple"
//   });
// });

// var json = {};
//

//
// User.findAll({raw: true}).then(function(user) {
//   var valueArray = [];
//   for (var key in user[0]) {
//     valueArray.push(key);
//   }
//   json[0] = valueArray;
//   valueArray = [];
//   for (var i = 0; i < user.length; i++) {
//       for (var key in user[i]) {
//         valueArray.push(user[i][key]);
//     }
//     json[i + 1] = valueArray;
//     valueArray = [];
//   }
// })



module.exports = User;
