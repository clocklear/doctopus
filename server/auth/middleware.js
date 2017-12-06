function authenticationMiddleware () {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401);
    res.json({
      "err": "unauthorized"
    });
  }
}

module.exports = authenticationMiddleware