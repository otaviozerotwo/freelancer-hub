const router = require('express').Router();
const freelancerController = require('./../controllers/freelancerController');

router
  .route('/freelancer')
  .post((req, res) => freelancerController.create(req, res));

module.exports = router;