const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const getDate = require("./date");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let displayDate = date.getDate();

  res.render("list", { dateToday: displayDate, newListItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function (req, res) {
  console.log("Server running on port 3000");
});
