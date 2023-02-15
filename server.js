const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
nunjucks.configure("views", {
  autoescape: true,
  express: app,
  tags: {
    blockStart: "[%",
    blockEnd: "%]",
    variableStart: "[[",
    variableEnd: "]]",
    commentStart: "[#",
    commentEnd: "#]",
  },
});

app.set("view engine", "njk");
app.use(express.static("images"));

app.listen(3001, () => {
    console.log("Listening on http://localhost:3001");
});

app.get("/", (req,res) => {res.render("index")})
app.get("/sort", (req,res) => {res.send("index")})