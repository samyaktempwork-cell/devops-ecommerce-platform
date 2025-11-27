const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../frontend/public/images")));

const products = [
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
];

app.get("/products", (req, res) => {
  const { search, category } = req.query;
  let filtered = products;

  if (search) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  res.json(filtered);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

if (process.env.NODE_ENV !== "test") {
  const port = 4000;
  app.listen(port, () => {
    console.log("Backend running on port", port);
  });
}

module.exports = app;
