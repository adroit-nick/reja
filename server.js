console.log("Hello world!");
const express = require ("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8" , (err,data) => {
  if(err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});

//
// 1 kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2 Session ga bogliq kodlar
// 3 views ga bogliq codelar
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routingga bog'liq codelar

app.post("/create-item", (req, res)=>{
   console.log(req.body);
   res.json({test: "succes"});
});

// publishingdagi codelar

app.get('/author', (req, res) =>{
  res.render("author", {user: user});
});



app.get("/", function(req, res){
  res.render("Reja");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT , function () {
  console.log(
    `The server is running sucsessfully on port: ${PORT}, http://localhost:${PORT}`

  );

});

// app.get("/hello", function(req, res) {  
//     res.end("<h1>Hello World by me</h1>");
// });
// app.get("/list", function(req, res) {  
//     res.end("banan, olcha, olma");
// });
// app.get("/", function(req, res)   {
//      res.render('Reja.ejs');
//  });

