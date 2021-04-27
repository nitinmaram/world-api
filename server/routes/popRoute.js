var express = require('express');
var router = express.Router();
const { getPopulation  } = require('../controllers/getPopulation')


router.get('/', getPopulation);

module.exports = router;
