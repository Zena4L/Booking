const express = require('express');
const { getOverview, getTours } = require('../controllers/viewController');

const router = express.Router();

router.get('/', getOverview);
router.get('/tour/:slug', getTours);

module.exports = router;
