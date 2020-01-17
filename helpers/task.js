var db = require('../models/app');


exports.getTasks= function(req,res){
    db.taskModel.find()
    .then(function(data){
        res.json(data);
        console.log('working');
    })
    .catch(function(err){
        res.send(err);
        console.log('not working')
    })
}

exports.createTask = function(req,res){
        db.taskModel.create(req.body)
        .then(function(newTask){
            res.json(newTask);
        })
        .catch(function(err){
            res.send(err);
        })
    }

exports.getTask =  function(req,res){
        db.taskModel.findById(req.params.taskId)
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.send(err);
        })
    }

exports.updateTask = function(req,res){
        db.taskModel.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true})
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.send(err);
        })
    }
exports.deleteTask = function(req,res){
    db.taskModel.remove({_id:req.params.taskId})
    .then(function(req,res){
        res.json({message: 'Your task was removed!'});
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;