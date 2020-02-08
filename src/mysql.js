const mysql = require('mysql');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Asdfjkl123!',
  database: 'testr'
});

con.query('SELECT count(original_transaction_id) FROM last_record', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
});
