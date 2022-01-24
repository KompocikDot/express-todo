const express = require("express");
const app = express();
const main_route = require("./routes/main.js");
const bparser = require("body-parser");

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static('public'));
app.use(bparser.urlencoded({extended: false}));
app.use("/", main_route);
app.listen(3000);
