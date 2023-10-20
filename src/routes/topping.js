"use strict";
/* ----------------------
    NODEJS EXPRESS | PIZZA API
---------------------------------- */
const router = require("express").Router();
/* ---------------------------------------------------- */
// Routes/topping:

const topping = require("../controllers/topping");
// URL: /toppings
router.route("/").get(topping.list).post(topping.create);

router
  .route("/:id")
  .get(topping.read)
  .put(topping.update)
  .patch(topping.update)
  .delete(topping.delete);
/* ---------------------------------------------------- */
module.exports = router;
