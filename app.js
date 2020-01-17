var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var taskRoutes = require('./routes/task');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.static(__dirname + '/views'));


app.get('/', function(req,res){
    res.send("index.html");
});

app.use('/api/task', taskRoutes);

app.listen(3000, function(){
    console.log("Now hosting on port 3000");
});

 