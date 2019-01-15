$(document).ready(function(){
    $("#submit").click(function(){
        showInfo();
    })
});

var favColor;
var superlative;
var adjective;


function getInfo(){
    superlative = $('#superlative').val();
    adjective2 = $('#adjective2').val();
    adjective3 = $('#adjective3').val();
    adjective4 = $('#adjective4').val();
    adjective = $('#adjective1').val();
    favColor = $('#favColor').val();
    bodyPart = $('#bodyPart').val();
    noun = $('#noun').val();
    place = $('#place').val();
    
    
    
    
}
function showInfo(){
getInfo();
var message = "Your favorite color is " + favColor  + superlative + adjective + bodyPart + noun + adjective2 + adjective3 + adjective4 + place ;

$('#output').text(message).show();
}
