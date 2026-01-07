const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// CREATE order
router.post("/", async (req, res) => {
  const { userId, items, total } = req.body;
  const order = new Order({ userId, items, total });
  await order.save();
  res.status(201).json(order);
});

// GET orders by user
router.get("/user/:userId", async (req, res) => {
  const orders = await Order.find({ userId }).sort({ createdAt: -1 });
  res.json(orders);
});

module.exports = router;
