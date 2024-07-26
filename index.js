const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const data = [
    "170.64.158.61:8080"
  ];

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server berjalan pada port 3000");
});
