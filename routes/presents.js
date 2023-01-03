const express = require('express');
const Present = require('../models/Present');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const presents = await Present.find({});
    res.render('presents', {presents});
  } catch (error) {
    next(error);
  }
});

module.exports = router;
