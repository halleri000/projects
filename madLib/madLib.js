$(document).ready(function () {
    $("#submit").click(function () {
        $('#forms').hide()
        $('#submit').hide()
        $('#back').show();
        showInfo();
    });

$("#back").click(function(){
   	    $("#forms").show()
        $('#submit').show()
        $("#output").hide().animate({'top':'0','opacity':'.01'},'slow');
        $('#back').hide()
        $('input').val("");
   });
})



function getInfo() {
        occupation = $('#occupation').val();
        verbIng = $('#verbIng').val();
        emotion = $('#emotion').val();
        verbEd = $('#verbEd').val();
        noun1 = $('#noun1').val();
        noun2 = $('#noun2').val();
        noun3 = $('#noun3').val();
        place = $('#place').val();
        noun4 = $('#noun4').val();
        nounP = $('#nounP').val();
        noun5 = $('#noun5').val();
        verb = $('#verb').val();
}

function showInfo() {
        getInfo();
            var message = "It was during the battle of " + noun1 + " when I was running through a " + noun2 + " when a " + noun3 + " went off right next to my platoon. Our " + occupation + " yelled for us to " + verb + " to the nearest " + place + " we could find. When we got to the " + place + " we " + verbEd + " to start a fire. As we were starting the fire the enemy saw the " + noun4 + " from the fire and started " + verbIng + " at us. We all quickly ducked behind the " + nounP + " at the " + place + " and returned fire. We quickly eliminated the enemy and were " + emotion + " that we had won the battle."

        $("#output").text(message).slideDown('slow').animate({'top':'0',"opacity":'1'},'slow');

}
