const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 700 },
    { id: 2, name: "Mouse", price: 20 },
    { id: 3, name: "Keyboard", price: 40 }
  ]);
});

app.listen(4000, () => console.log("Backend running on port 4000"));
