import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const productList = [
    {
      id: 1,
      name: "Smartphone",
      price: 599.99,
      category: "Electronics",
      description: "A high-quality smartphone with advanced features.",
    },
    {
      id: 2,
      name: "Laptop",
      price: 999.99,
      category: "Electronics",
      description: "A powerful laptop for work and entertainment.",
    },
    {
      id: 3,
      name: "Headphones",
      price: 129.99,
      category: "Electronics",
      description: "Premium headphones for immersive audio experience.",
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 79.99,
      category: "Sports",
      description: "Comfortable shoes designed for running and athletics.",
    },
    {
      id: 5,
      name: "Backpack",
      price: 49.99,
      category: "Fashion",
      description: "Stylish backpack for everyday use or travel.",
    },
    {
      id: 6,
      name: "Watch",
      price: 199.99,
      category: "Fashion",
      description: "Elegant watch with precise timekeeping features.",
    },
    {
      id: 7,
      name: "Coffee Maker",
      price: 59.99,
      category: "Home & Kitchen",
      description: "Coffee maker for brewing delicious coffee at home.",
    },
  ];

  if (req.query.search) {
    const filterProduct = productList.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProduct);
    return;
  }

  setTimeout(() => {
    res.json(productList);
  }, 3000);
});

const PORT = 8082;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
