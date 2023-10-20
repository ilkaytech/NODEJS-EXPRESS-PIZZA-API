"use strict";
/* ----------------------
    NODEJS EXPRESS | PIZZA API
---------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
// Order Model:

const OrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Order", OrderSchema);
