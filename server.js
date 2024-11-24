const http = require("http");
const mongodb = require("mongodb");

// MongoDB ulash
let db;

const connectionString =
  "mongodb+srv://AbrorT:abrormongodb94@cluster0.ct5ep.mongodb.net/";

// MongoDB ulanish
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) { console.log("Error on Connection MongoDB");
    } else {
      console.log("MongoDB connection succeed");
      module.exports = client;


      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);