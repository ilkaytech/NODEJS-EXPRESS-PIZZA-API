"use strict";
/* ----------------------
    NODEJS EXPRESS | PIZZA API
---------------------------------- */
const router = require("express").Router();
/* ---------------------------------------------------- */
// Routes/order:

const order = require("../controllers/order");
// URL: /orders
router.route("/").get(order.list).post(order.create);

router
  .route("/:id")
  .get(order.read)
  .put(order.update)
  .patch(order.update)
  .delete(order.delete);
/* ---------------------------------------------------- */
module.exports = router;
