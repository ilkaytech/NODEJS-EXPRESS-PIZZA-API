"use strict";
/* ----------------------
    NODEJS EXPRESS | PIZZA API
---------------------------------- */
// Pizza Model:

const { mongoose } = require("../configs/dbConnection");
/* -------------------------------------------------------
{
  "name": "Pizza Margarita",
  "price": 124.99,
  "toppings": [
    "652d71b9c31f8eecbf12519b",
    "652d71bcc31f8eecbf12519d",
    "652d71bfc31f8eecbf12519f"
  ]
}
/* ------------------------------------------------------- */
const PizzaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    toppings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topping",
      },
    ],
  },
  {
    collection: "pizzas",
    timestamps: true,
  }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Pizza", PizzaSchema);
