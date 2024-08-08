const router = require('express').Router();
const freelancerController = require('../controllers/freelancerController');

router
  .route('/freelancer')
  .post((req, res) => freelancerController.create(req, res))

router
  .route('/freelancer')
  .get((req, res) => freelancerController.getAll(req, res))

router
  .route('/freelancer/:id')
  .get((req, res) => freelancerController.getOne(req, res))

router
  .route('/freelancer/:id')
  .put((req, res) => freelancerController.update(req, res))

router
  .route('/freelancer/:id')
  .delete((req, res) => freelancerController.delete(req, res))

module.exports = router;