var config = require('../dbconfig');
const sql = require('mssql');

const Login = async (username, password) => {
    try {
      let pool = await sql.connect(config);
      let user = await pool
        .request()
        .input('username', sql.VarChar, username)
        .input('password', sql.VarChar, password)
        .query('SELECT * FROM UserAccount WHERE Username = @username AND Password = @password');
  
        // console.log("user.recordsets:", user.recordsets);
        // console.log("user.recordsets type:", typeof user.recordset);
      return user.recordset;
    } catch (err) {
      console.log(err);
      throw new Error("An error occurred during login.");
    }
  };
  
  module.exports = {
    Login
}