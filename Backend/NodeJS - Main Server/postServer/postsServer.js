const express = require("express");
const fs = require("fs");
const multer = require("multer");
const postsServer = express();
postsServer.use(express.urlencoded({ extended: true }));
postsServer.use(express.json());

const SHARED_TOKEN = "eubverobvegi-94gnvrwv9j94jvn-vvburobvwer"

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/') // Specify the destination directory for uploaded files
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
//   });
  
//   const upload = multer({ 
//     storage: storage,
//     fileFilter: function (req, file, cb) {
//       const ext = path.extname(file.originalname);
//       if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
//         return cb(new Error('Only images are allowed'));
//       }
//       cb(null, true); // Accept the file
//     }
//   });
postsServer.use((req,res,next)=>{
    if(req.headers["post-server-key"] == SHARED_TOKEN || req.url.match(/^\/media\/(.+)$/)){
        next();
    }
    else{
        res.status(401).send("You are not authorized to send this request");
    }
})


postsServer.get("/media/:file_name",(req,res)=>{
    var file_name = req.params.file_name
    const path = `C:/Users/roare/OneDrive/Documents/Projects/Insta Clone/Backend/NodeJS - Main Server/media/Images/${file_name}`
    fs.access(path, (err)=>{
        if(err){
            console.log("File Not found");
            res.status(404).send("File Not Found!");
        }else{
            res.status(200).sendFile(path)
        }
    })
})
// uploadSpecs.array(element_name) -> name of the field in html 
postsServer.post("/upload/media", uploadSpecs.array('image'),  (req,res)=>{
    var file_name = "image" + Date.now();
})
postsServer.get("/posts",(req,res)=>{
    res.json([
        {
          "id": 1,
          "postedBy": "user123",
          "content": "This is the first example post.",
          "date": "2024-07-17T12:34:56Z"
        },
        {
          "id": 2,
          "postedBy": "user456",
          "content": "This is the second example post, sharing some thoughts.",
          "date": "2024-07-18T15:20:30Z"
        },
        {
          "id": 3,
          "postedBy": "user789",
          "content": "This is the third example post. Excited to share!",
          "date": "2024-07-19T09:10:45Z"
        }
      ]
      )
})
postsServer.listen(8081,()=>{
    console.log(express.static('public'))
    console.log("Server lisening on : ",8081);
})