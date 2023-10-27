"use strict";
/* ----------------------
    NODEJS EXPRESS | PIZZA API
---------------------------------- */
// Middleware: permissions

module.exports = {
  isLogin: (req, res, next) => {
    return next();

    if (req.isLogin) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("NoPermission: You must login.");
    }
  },

  isAdmin: (req, res, next) => {
    return next();

    if (req.isLogin && req.user.isAdmin) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("NoPermission: You must login and to be Admin.");
    }
  },
};
