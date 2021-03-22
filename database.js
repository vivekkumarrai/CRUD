const{createPool } = require('mysql');
const pool =createPool({
    host: "localhost",
  user: "root",
  password: "Vivek@1234",
  database: "base1",
  connectionLimit: 10

})
pool.query('select * from new_table',(err,result,fields) => {
    if(err){
        return console.log(err);
    }
    return console.log(result);
})