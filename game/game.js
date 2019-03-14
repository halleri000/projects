$(document).ready(function(){
   
$("#submit").click(function(){
    check();
    
})
$("#reset").click(function(){
    reset();
    
})


});



var check = function(){
    var a = $("#input1").val();
    var b = $("#input2").val();
    var c = $("#input3").val();
    if((a === b) || (a === c)){
        $("#output").text('fail');
    }
}

var reset = function(){
    $("input").val("");
}

