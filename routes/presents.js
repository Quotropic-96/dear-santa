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

router.get('/:presentId', async (req, res, next) => {
  const { presentId } = req.params;
  try {
    const present = await Present.findById(presentId);
    res.render('detail', present);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
