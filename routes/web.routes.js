const express = require('express');

const webRouter = express.Router();

webRouter.get('/', (req, res) => {
    console.log('web');
})

module.exports = webRouter;