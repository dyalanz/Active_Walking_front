let mysql = require("mysql") // Import mysql

let mysql_config = { 
    connectionLimit : 10, // Max connect
    host            : 'activewalking.cp3xto8b8gev.ap-southeast-2.rds.amazonaws.com', // Remote ip 
    user            : 'admin', // mysql ACCOUNT
    password        : 'ZGDnikle369', // mysql PSW
    database        : 'mydb' // NAME OF db
}
let pool = mysql.createPool(mysql_config); // Creat pool

module.exports = {
    pool
}