const express = require("express");
const loginRouter = express.Router();
const { getEncodedToken } = require("../utilities/utilityFunctions");
const { getDataBaseConnnection } = require("../utilities/PG_DB_Conn");
const { v4: uuidv4 } = require("uuid");

loginRouter.post("/login", async (req, res) => {
  const DBConn = await getDataBaseConnnection();
  const email = req.body.email;
  const userName = req.body.userName;
  const password = req.body.password;

  if ((userName || email) && password) {
    var result = await DBConn.query(
      "Select * from Users where username = $1 OR email = $2",
      [userName, email]
    );
    if (result.rowCount > 0) {
      const OrigPassword = result.rows[0].password;
      if (password == OrigPassword) {
        const user_token = getEncodedToken();
        console.log("TTriggerringgg");
        res.set("Authorization", `Bearer ${user_token}`);
        res.cookie('auth_token', user_token, {
          httpOnly: true,
          secure: true, // Ensure the cookie is sent only over HTTPS
          sameSite: 'Strict', // Prevent CSRF attacks
          maxAge: 2* 24 * 60 * 60 * 1000, // Set cookie to expire in 1 day
      });
        res.send("Success");
        return;
      }
    }
  }
  res.send("Failure");
});

loginRouter.post("/signUp", async (req, res) => {
  const email = req.body.email;
  const userName = req.body.userName;
  const password = req.body.password;
  const name = req.body.name;

  if (name && email && password && userName) {
    try {
      const userId = uuidv4();
      const DBConn = await getDataBaseConnnection();
      var query = `insert into Users (userid, username, email, password, name) Values('${userId}','${userName}', '${email}', '${password}', '${name}')`;
      var result = await DBConn.query(query);
      res.send("Success");
    } catch (err) {
      console.log(err)
      if(err.code=='23505'){
        res.send("User Name/ Email already exists");
        return;
      }
    }
  }
  res.send("Failure");
});
module.exports = loginRouter;
