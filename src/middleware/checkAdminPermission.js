const db = require("../services/db");

function checkAdminPermission(req, res, next) {
  const result = db.query("");
  if (result.length > 0) {
    req.admin = true;
    return;
  }
  req.admin = false;
  next();
}

module.exports = { checkAdminPermission };
