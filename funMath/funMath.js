$("#document").ready(function() {

  $("#convert").click(function() {
    $("#output").toggle();
    add();
  });
  $("#compute").click(function() {
    $("#output2").toggle();
    moneh();
  });
  $("#convert2").click(function() {
    $("#output3").toggle();
    weight();
  });
  $("#convert3").click(function() {
    $("#output4").toggle();
    time();
  })
})
var add = function() {
  var year;
  var day;

  var x = $("#minutes").val();
  year = Math.floor(x / 525600);
  var remainingMinutes = x % 525600;
  day = Math.floor(remainingMinutes / 1440);
  // var remainingMinutes = x % 525600;
  //var day = remainingMinutes / 1440;
  var message = "years: " + year + " days: " + day;
  $('#output').text(message);


}
var moneh = function() {

  var x = $('#subtotal').val();
  var y = $('#gratuity').val();
  x = parseInt(x);
  y = parseInt(y);
  var gratuityamount = x * (y / 100.0);
  var total = x + gratuityamount;
  var message = "gratuity: $" + gratuityamount + " Total: $" + total;

  $("#output2").text(message);
}

var weight = function() {

  var x = $("#pounds").val();
  var y = $("#inches").val();

  var kg = x * 0.454;
  var m = y * 0.0254;
  var pow = Math.pow(m, 2);

  var BMI = kg / pow;

  var message = "BMI is: " + BMI;

  $("#output3").text(message);
}

var time = function() {

  var x = $("#decimal").val();
  var hours = Math.floor(x);
  var decimalMinutes = x % 1;
  var minutes = Math.ceil(decimalMinutes * 60);
  $("#output4").text(hours + " Hours " + minutes + "  Minutes");
}

