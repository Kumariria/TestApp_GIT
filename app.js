console.log("Welcome to Github testing App");

import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App is listening to the port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h2> Hello Worlds</h2>");
});
