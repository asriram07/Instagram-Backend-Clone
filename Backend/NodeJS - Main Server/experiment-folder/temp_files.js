const fs = require("fs");
fs.readFile("C:/Users/roare/OneDrive/Documents/Projects/Insta Clone/Backend/NodeJS - Main Server/media/Images/p11.jpg",(err,data)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log(data);
    }
})