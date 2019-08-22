'use strict';

const express = require('express');

const { HelloController } = require('../controllers/hello.controller');

module.exports = (middlewares) => {
    const controller = new HelloController();
    const router = express.Router();

    if (middlewares) {
        middlewares.forEach(middleware => router.use(middleware));
    }

    router.get('/', controller.hello.bind(controller));

    return router;
};
