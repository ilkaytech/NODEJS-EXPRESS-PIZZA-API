"use strict";
/* ----------------------
    NODEJS EXPRESS | PIZZA API
---------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
// Order Model:

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pizzaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pizza",
      required: true,
    },
    size: {
      type: String,
      trim: true,
      required: true,
      enum: ["Small", "Medium", "Large", "XLarge"],
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Order", OrderSchema);
