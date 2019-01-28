$("#document").ready(function(){

	$("#go").click(function(){
  	$("#output").toggle();
    add();
  })
})
var add = function(){
    var year;
	  var day;

    var x = $("#number1").val();
 year =  Math.floor( x /525600);
 var remainingMinutes=x%525600;
 day = Math.floor(remainingMinutes / 1440);
// var remainingMinutes = x % 525600;
//var day = remainingMinutes / 1440;
  var message = "years: " + year + " days: " + day;
    $('#output').text(message);


}
