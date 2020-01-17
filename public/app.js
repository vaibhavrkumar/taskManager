$(document).ready(function(){
   $.getJSON("/api/task")
   .then(addTasks);
});

function addTasks(data){
    data.forEach(function(dataOne){
        var newTask = $('<li>'+dataOne.name + '</li>');
        $('.tasklist').append(newTask);    
    })
}