var express = require('express');
var router = express.Router();
const { getAllProducts } = require("../controllers/products");

// set the CORS headers
router.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function(req, res, next) {
  getAllProducts(req, res, next);
});

module.exports = router;
