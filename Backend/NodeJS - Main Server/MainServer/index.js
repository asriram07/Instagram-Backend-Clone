const express = require("express");
const mainServer = express();
const loginRouter = require("./routes/loginRoutes");
const cookie_parser = require("cookie-parser");
const { verifyJWTToken } = require("./utilities/utilityFunctions");
const { getDataBaseConnnection } = require("./utilities/PG_DB_Conn");
const {createProxyMiddleware} = require("http-proxy-middleware");
// let DBConn;

const SHARED_TOKEN = "eubverobvegi-94gnvrwv9j94jvn-vvburobvwer"

mainServer.use(express.json());
mainServer.use(express.urlencoded({ extended: true }));
mainServer.use(cookie_parser());

mainServer.use(async (req, res, next) => {
  console.log(req.ip ,req.connection.remoteAddress,req.connection.remotePort);
  resourceURLs = ["/posts"];
  if (resourceURLs.includes(req.url)) {
    //  console.log("Protected Route : ", req.url);
    if (req.cookies.auth_token && verifyJWTToken(req.cookies.auth_token)) {
      console.log("Protected Route : ", req.url);
      next();
    } else {
      res.status(401).send("User not logged in!");
    }
  } else {
    next();
  }
});
mainServer.use("/",loginRouter);

mainServer.get('/posts', createProxyMiddleware({
  target: "http://localhost:8081",
  changeOrigin: true,
  on:{
    proxyReq:(proxyReq,req,res)=>{
      console.log(SHARED_TOKEN)
      proxyReq.setHeader("post-server-key", SHARED_TOKEN);
    },
    proxyRes:(proxyRes,req,res)=>{
      console.log("------------------");
    }
  }
}));


mainServer.listen(8080, async (req, res) => {
  console.log("Lisening on port", 8080);
});
