require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
// app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const logger = require("morgan");
const cors = require("cors");


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.use(logger("dev"));

  app.use(express.static("client/public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mac-tacosDB",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("mongoose successfully connected.");
});
connection.on("error", (err) => {
  console.log("mongoose successfully connected.", err);
});

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mac-tacoDB", { useNewUrlParser: true });

// require("dotenv").config()

// const AuthoController = require("./controllers/authController")
// const ordenControler = require("./controllers/OrdenControllers");
// const clienteController = require("./controllers/ClienteControllers");
// const userController = require("./controllers/UserController");
// app.use(AuthoController)
// app.use(userController)
// app.use("/api/orden", ordenControler);
// app.use(clienteController);



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, localhost:3000, Content-Type, Accept");
  next();
});


app.get("/api/config", (req, res) => {
  console.log("working");
  res.json({
    success: "true",
  });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

//cors-anywhere
