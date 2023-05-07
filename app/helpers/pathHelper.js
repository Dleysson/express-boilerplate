// Functions to retrieve directory paths

// path module
const PATH = require('path')

// get app.js directory path
const APP_DIR = PATH.dirname(require.main.filename)

// routes directory path
exports.routes = (path = "") => {
    return APP_DIR + '/routes/' + path
}

// web controllers directory path
exports.webControllers = (path = "") => {
    return APP_DIR + '/app/http/controllers/web/' + path
}

// api controllers directory path
exports.apiControllers = (path = "") => {
    return APP_DIR + '/app/http/controllers/api/' + path
}