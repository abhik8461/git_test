// import express from "express";
const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
const port = 3900;

let count = 0;

const countReq = (req, res, next) => {
  count++;
  console.log(`Request Count:${count}`);
  next();
};

app.get("/count", countReq, (req, res) => {
  console.log(`Request Count:${count}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("Hello World");
});

app.use(express.urlencoded({ extended: true }));

app.get("/ejs", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is Running at Port ${port}`);
});
