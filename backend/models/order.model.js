const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user_id: String,
    products: [
      {
        product_id: String,
        name: String,
        quanlity: Number,
        price: Number,
      },
    ],
    total_amount: Number,
    status: {
      type: String,
      default: "Chờ xử lý",
    },
    address: {
      street: String,
      ward: String,
      district: String,
      province: String
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema, "orders");
module.exports = Order;
