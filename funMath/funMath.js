$("#document").ready(function(){

	$("#convert").click(function(){
  	$("#output").toggle();
    add();
  });
    $("#compute").click(function(){
    	$("#output2").toggle();
    moneh();
  });
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
var moneh = function(){

var x = $('#subtotal').val();
var y = $('#gratuity').val();
x = parseInt(x);
y = parseInt(y);
var gratuityamount = x * (y / 100.0); 
var total = x  + gratuityamount;
var message="gratuity: $" + gratuityamount + " Total: $" + total;

$("#output2").text(message);
}
