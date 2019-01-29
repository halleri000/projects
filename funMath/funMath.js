$("#document").ready(function () {

  $("#convert").click(function () {
    problem1();
  });

  $("#compute").click(function () {
    problem2();
  });

  $("#convert2").click(function () {
    problem3();
  });
  $("#convert3").click(function () {
    problem4();
  });
})

var problem1 = function () {
  var year;
  var day;
  var x = $("#minutes").val();
  year = Math.floor(x / 525600);
  var remainingMinutes = x % 525600;
  day = Math.floor(remainingMinutes / 1440);
  $('#output1').toggle().text("Years: " + year + " Days: " + day);
}

var problem2 = function () {
  var x = $('#subtotal').val();
  var y = $('#gratuity').val();
  x = parseInt(x);
  y = parseInt(y);
  var gratuityamount = (y / 10.0);
  var total = x + gratuityamount;
  $("#output2").toggle().text(" Gratuity: $" + gratuityamount + " Total: $" + total);
}

var problem3 = function () {
  var x = $("#pounds").val();
  var y = $("#inches").val();
  var kg = x * 0.45359237;
  var m = y * 0.0254;
  var pow = Math.pow(m, 2);
  var BMI = kg / pow;
  BMI = BMI.toFixed(4);
  $("#output3").toggle().text("BMI is: " + BMI);
}

var problem4 = function () {
  var x = $("#decimal").val();
  var hours = Math.floor(x);
  var decimalMinutes = x % 1;
  var minutes = Math.ceil(decimalMinutes * 60);
  $("#output4").toggle().text(hours + " Hours, " + minutes + "  Minutes");
}