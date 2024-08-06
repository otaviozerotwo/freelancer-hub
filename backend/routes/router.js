const router = require('express').Router();
const freelancerRouter = require('./freelancerRoutes');

router.use('/', freelancerRouter);

module.exports = router;