const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
    date: new Date().toISOString(),
    process: process.env,
    project: "inventory",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port  3000");
});
