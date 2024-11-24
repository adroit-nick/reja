console.log("Hello world!");
const e = require("express");
const express = require ("express");
const app = express();
const fs = require("fs");

// mongo db ni chaqirish

const db = require("./server").db();
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8" , (err,data) => {
  if(err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});

//MongoDBni ulaymiz



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
  console.log("user entered /create-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err,data)=>{
    if(err) {
      console.log(err);
      res.end("something went wrong");
    } else{
      res.end("successfully added");
    }
 });
});

// publishingdagi codelar

app.get('/author', (req, res) =>{
  res.render("author", {user: user});
});



app.get("/", function(req, res){
  console.log("user entered /");
  db.collection("plans").find().toArray( (err, data) => {
    if(err) {
      console.log(err);
      res.end("something went wrong");
    } else{
       console.log(data);
       res.render("reja", {items: data});

    }
  });
});

module.exports = app;