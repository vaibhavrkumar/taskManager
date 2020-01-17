var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require("../models/app");
var helpers = require("../helpers/task");

router.route('/')
    .get(helpers.getTask)
    .post(helpers.createTask)

router.route('/:taskId')
    .get(helpers.getTask)
    .put(helpers.updateTask)
    .delete(helpers.deleteTask)

module.exports = router;

 