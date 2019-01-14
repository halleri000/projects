
$(document).ready(function(){

    $("#button").click(function(){

        showInfo();

    })

});
var userName;


function getInfo(){
    userName = $("#userName").val();
}

function showInfo(){
    getInfo();
    var message = "Hello" +  userName + ", glad to meet you!";

    $('#ouput').text(messsage);
    $("#output").text(message).show().animate({'top':'0px',"opacity":'1'},'slow');
}

