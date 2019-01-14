$(document).ready(function(){
    $("#button")>click(function(){
        showInfo();
    })
});


function getInfoColor(){
    favColor = $('#favColor').val();
}
function showInfo(){
getInfo();
var message = "your favorite color is" +  favColor;

$('#output').text(messsage).show();
}