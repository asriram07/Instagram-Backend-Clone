const pg = require("pg");
const connectionString =
  "postgres://postgres:root@localhost:5500/Instagram-Main"; //encode this using constants

let DBConn = null;
async function getDataBaseConnnection() {
  if (DBConn) {
    return DBConn;
  }
  DBConn = new pg.Client(connectionString);
  await DBConn.connect();
  console.log("Connected to Database Successfully");
  return DBConn;
}
module.exports = {getDataBaseConnnection};