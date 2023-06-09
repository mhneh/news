'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');
const searchController = require('../controllers/searchController');
const paymentController = require('../controllers/paymentController');

router.get('/createTables', (req, res) => {
    let models = require('../models');
    models.sequelize.sync().then(() => {
        res.send('tables created!');
    })
});

router.get('/', controller.showHomePage);

router.get('/search', searchController.showPage)

router.get('/payment', paymentController.payment)

router.get('/thanks', paymentController.result)

router.get('/:page', controller.showPage);


module.exports = router;