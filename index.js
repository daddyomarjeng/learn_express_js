const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); //to be able to make post request

// @route GET /posts
app.get("/posts", (req, res) => {
  res.status(200).json({
    id: "1",
    title: "Post 1",
    content: "This is post 1",
    Author: "DOJ",
    cteated_at: "16-02-2022",
    updated_at: "17-02-2022",
  });
});

// @route POST /posts
app.post("/posts", (req, res) => {
  res.status(201).json(req.body);
  //   console.log(req.body);
});

// @route PUT /posts/:id
app.put("/posts/:id", (req, res) => {
  res.status(200).json({ message: `user id ${req.params.id} updated` });
  //   console.log(req.params.id);
});

// @route DELETE /posts/:id
app.delete("/posts/:id", (req, res) => {
  res.status(200).json({ message: `user id ${req.params.id} deleted` });
  //   console.log(req.params.id);
});

// @route ALL /tester
app.all("/tester", (req, res) => {
  console.log("In Secret route");
  res.send("You accessed the secret route");
});
//you can have something like below here for auth:
// app.all("*", requireAuthentication);
// app.all("*", loadUser);

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
