const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "OK" });
});

app.listen(3000, () =>
  console.log(`Server is running on: http://localhost:${3000}`)
);
