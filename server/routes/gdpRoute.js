var express = require('express');
var router = express.Router();
const { getGdp  } = require('../controllers/getGdp')


router.get('/', getGdp);

module.exports = router;
