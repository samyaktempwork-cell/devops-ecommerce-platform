const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Wireless Mouse",
      price: 19.99,
      category: "Accessories",
      image: "/images/mouse.png",
      description: "A smooth and responsive wireless mouse."
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 59.99,
      category: "Accessories",
      image: "/images/keyboard.png",
      description: "RGB mechanical keyboard with blue switches."
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: 899.99,
      category: "Computers",
      image: "/images/laptop.png",
      description: "High-performance laptop for gaming and work."
    }
  ]);
});



app.listen(4000, () => console.log("Backend running on port 4000"));
