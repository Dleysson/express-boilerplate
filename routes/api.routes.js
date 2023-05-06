const express = require('express');

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    console.log('api')
})

module.exports = apiRouter;