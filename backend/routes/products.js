const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// GET single product by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id || id === "null") {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: "Invalid product ID format" });
  }
});


// POST create product (admin/dev)
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

module.exports = router;
