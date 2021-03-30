const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "node_docker_test_app",
//   password: process.env.DB_PASSWORD,
// });
// connection.connect

const mainRoutes = require("./routes/main.js");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", mainRoutes);

app.listen(PORT, () => {
  console.log(`Server listens on ${PORT}...`);
});
