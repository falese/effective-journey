const express = require('express');
const app = express();
const controller = require('../middleware/document.controller');
const storage = require('../middleware/storage')



app.post('/upload', controller.uploadFile)

module.exports = app