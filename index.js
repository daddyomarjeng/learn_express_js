const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  //   res.send("Hello World, DOJ learning Express");
  //   res.status(200).send("Hello World, DOJ learning Express");
  res
    .status(200)
    .json({ message: "Hello World, DOJ learning Express", from: "DOJ" });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
