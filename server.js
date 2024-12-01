const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://AbrorT:abrormongodb94@cluster0.ct5ep.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, 
  (err, client) => {
    if (err)  console.log("Error on Connection MongoDB");
     else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 4001;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);