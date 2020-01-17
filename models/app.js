var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/taskManager-api');

mongoose.Promise = Promise;

module.exports.taskModel = require("./task");