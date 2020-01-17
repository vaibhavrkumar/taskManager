var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    name: {type: String, required: 'required'},
    completed: {type: Boolean, default:false},
    dateCreated: {type:Date, default: Date.now}
});

var taskModel = mongoose.model('taskModel', taskSchema);

module.exports = taskModel;

