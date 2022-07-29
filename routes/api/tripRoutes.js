const router = require('express').Router();
const sequelize = require('../../config/connection');
const {Location, Traveller, Trips} = require('../../models');

// GET all readers
router.get('/', async (req, res) => {
  try {
    const tripsData = await Trips.findAll();
    res.status(200).json(tripsData)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
