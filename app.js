import express from "express";
const app = express();

const port = 3900;

let count = 0;

const countReq = (req, res, next) => {
  count++;
  console.log(`Request Count:${count}`);
  next();
};

app.get("/", countReq, (req, res) => {
  console.log(`Request Count:${count}`);
});
app.listen(port, () => {
  console.log(`Server is Running at Port ${port}`);
});
