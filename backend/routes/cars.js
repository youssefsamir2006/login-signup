const router = require('express').Router();
let Car = require('../models/car.model');

router.route('/').get((req, res) => {
  Car.find()
    .then(cars => res.json(cars))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
