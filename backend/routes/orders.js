const express = require("express");
const Order = require("../models/Order");
const auth = require("../middleware/auth");

const router = express.Router();

/**
 * CREATE ORDER (Protected)
 */
router.post("/", auth, async (req, res) => {
  try {
    const { items, total } = req.body;

    const order = new Order({
      userId: req.user.id,
      items,
      total
    });

    await order.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Failed to create order" });
  }
});

/**
 * GET LOGGED-IN USER ORDERS (Protected)
 */
router.get("/my", auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

module.exports = router;
