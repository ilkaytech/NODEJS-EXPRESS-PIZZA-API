"use strict";
/* ----------------------
    NODEJS EXPRESS | PIZZA API
---------------------------------- */
const router = require("express").Router();
/* ---------------------------------------------------- */
// Routes/pizza:

const pizza = require("../controllers/pizza");
// URL: /pizzas
router.route("/").get(pizza.list).post(pizza.create);

router
  .route("/:id")
  .get(pizza.read)
  .put(pizza.update)
  .patch(pizza.update)
  .delete(pizza.delete);
/* ---------------------------------------------------- */
module.exports = router;
