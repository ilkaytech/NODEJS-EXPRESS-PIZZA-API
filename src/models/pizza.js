"use strict";
/* ----------------------
    NODEJS EXPRESS | PIZZA API
---------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
// Pizza Model:

const PizzaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  {
    collection: "toppings",
    timestamps: true,
  }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Pizza", PizzaSchema);
