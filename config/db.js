const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

//let sql = "SELECT * FROM POSTS;";

/*pool.execute(sql, function (err, result) {
  if (err) throw err;

  result.forEach((res) => {
    console.log(res.title);
  });
});*/

module.exports = pool.promise();
