console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require('http');

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code
// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4  routing code
app.post("/create-item", (req, res) => {
    console/log(req.body);
    res.json({test:"qabul qilindi"});
})

app.get("/", function (req, res) {
    res.render("harid");

});


app.get("/hello", function(req, res) {  
    res.end("<h1>Hello World by me</h1>");
});
app.get("/list", function(req, res) {  
    res.end("banan, olcha, olma");
});
app.get("/", function(req, res)   {
     res.render('comment yaratish eski.ejs');
 });


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});