$("#document").ready(function(){

	$("#convert").click(function(){
  	$("#output").toggle();
    add();
  })
})
var add = function(){
    var year;
	  var day;

    var x = $("#minutes").val();
 year =  Math.floor( x /525600);
 var remainingMinutes=x%525600;
 day = Math.floor(remainingMinutes / 1440);
// var remainingMinutes = x % 525600;
//var day = remainingMinutes / 1440;
  var message = "years: " + year + " days: " + day;
    $('#output').text(message);


}
