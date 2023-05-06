// Functions to retrieve directory paths

// path module
const PATH = require('path')

// get app.js directory path
const APP_DIR = PATH.dirname(require.main.filename)

// routes directory path
const routes = (path = "") => {
    return APP_DIR + '/routes/' + path
}

module.exports = {
    routes: routes
}