const router = require('express').Router();
let Feature = require('../models/feature.model');

router.route('/').get((req, res) => {
  Feature.find()
    .then(features => res.json(features))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
