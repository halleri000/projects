$(document).ready(function() {

  $("#submit").click(function() {
  check();


  })
  $("#reset").click(function() {
    reset();

  })


});



var check = function() {
var a = parseInt($("#input0").val());
var b = parseInt($("#input1").val());
var c = parseInt($("#input2").val());
var d = parseInt($("#input3").val());
var e = parseInt($("#input4").val());
var f = parseInt($("#input5").val());
var g = parseInt($("#input6").val());
var h = parseInt($("#input7").val());
var i = parseInt($("#input8").val());
var j = parseInt($("#input9").val());
var k = parseInt($("#input10").val());
var l = parseInt($("#input11").val());
var m = parseInt($("#input12").val());
var n = parseInt($("#input13").val());
var o = parseInt($("#input14").val());
var p = parseInt($("#input15").val());
var q = parseInt($("#input16").val());
var r = parseInt($("#input17").val());
	
  if((a == 6 ) && (b === 9) && (c === 3) && (d === 3) && (e=== 2) && (f === 2) && (g === 9) && (h === 3) && (i === 6) && (j === 1) && (k === 1) && (l === 6) && (m === 3) && (n === 6) && (o === 1) && (p === 3) && (q=== 3) && (r === 1)){
  $("#output").text( 'ok');
  }
  else
  	$("#output").text("no");
}

var checkSquare = function() {

}














var reset = function() {
  $("input").val("");
  $("#output").text("");
}

