'use strict';

const express = require('express');

const { SummonersController } = require('../controllers/summoners.controller');

module.exports = (middlewares) => {
    const controller = new SummonersController();
    const router = express.Router();

    if (middlewares) {
        middlewares.forEach(middleware => router.use(middleware));
    }

    router.get('/search/:server/:username', controller.search.bind(controller));

    return router;
};
