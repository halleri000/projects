$(document).ready(function(){
   
$("#submit").click(function(){
    checkRow();
    
})
$("#reset").click(function(){
    reset();
    
})


});



var checkRow = function(){
  var zero = $("#r0c0").text();
    var one = $("#r0c1").text();
    var two = $("#r0c3").text();
    var three = $("#r0c4").text();
    var four = $("#r0c5").text();
    var five = $("#r0c8").text();
    
    var six = $("#r1c2").text();
    var seven = $("#r1c3").text();
    var eight = $("#r1c4").text();
    var nine = $("#r1c5").text();
    var ten = $("#r1c6").text();
    var eleven = $("#r1c8").text();
    var twelve = $("#r1c9").text();
    
    var thirteen = $("#r2c2").text();
    var fourteen = $("#r2c4").text();
    var fifteen = $("#r2c5").text();
    var sixteen = $("#r2c8").text()
    
    var seventeen = $("#r3c1").text();
    var eighteen =$("#r3c2").text();
    var nineteen = $("#32c3").text();
    var twenty = $("#r3c4").text();
    var twentyone = $("#r3c5").text();
    var twentytwo = $("#r3c6").text();
    var twentythree = $("#r3c7").text();
    var twentyfour = $("#r3c8").text();
    var twentyfive= $("#r3c9").text();
    
    var twentysix = $("#r4c1").text();
    var twentyseven =$("#r42c2").text();
    var twentyeight =$("#r4c3").text();
    var twentnine = $("#r4c4").text();
    var thirty = $("#r4c5").text();
    var thirtyone = $("#r4c6").text();
    var thirtytwo = $("#r4c7").text();
    var thirtythree =$("#r4c8").text();
    var thirtyfour = $("#r4c9").text()
    
    var thirtyfive = $("#r5c1").text();
    var thirtysix = $("#r5c2").text();
    var thirtyseven = $("#r5c3").text();
    var thirtyeight = $("#r5c4").text();
    var thirtynine =$("#r5c5").text();
    var forty =$("#r5c6").text();
    var fortyone = $("#r5c7").text();
    var fortytwo = $("#r5c8").text();
    var fortythree = $("#r5c9").text();
    
    var fortyfour = $("#r6c1").text();
    var fourtyfive = $("#r6c2").text();
    var fourtysix = $("#r6c3").text();
    var fourtyseven =$("#r6c4").text();
    var fourtyeight = $("#r6c6").text();
    var fourtynine = $("#r6c7").text();
    
    var fifty = $("#r7c2").text();
    var fiftyone = $("#r7c4").text();
    var fiftytwo = $("#r7c6").text();
    var fiftythree =$("#r7c7").text();
    var fiftyfour =$("#r7c8").text();
    var fiftyfive = $("#r7c9").text();
    
    var fiftysix = $("#r8c1").text();
    var fiftyseven = $("#r8c2").text();
    var fiftyeight = $("#r8c4").text();
    var fiftynine = $("#r8c5").text();
    var sixty = $("#r8c6").text();
    var sixtyone = $("#r8c8").text();
    var sixtytwo =$("#r8c9").text();

    
    var a = $("#input0").val();
    var b = $("#input1").val();
    var c = $("#input2").val();
    var d = $("#input3").val();
    var e = $("#input4").val();
    var f = $("#input5").val();
    var g = $("#input6").val();
    var h = $("#input7").val();
    var i = $("#input8").val();
    var j = $("#input9").val();
    var k = $("#input10").val();
    var l = $("#input11").val();
    var m = $("#input12").val();
    var n = $("#input13").val();
    var o = $("#input14").val();
    var p = $("#input15").val();
    var q = $("#input16").val();
    var r = $("#input17").val();
    var s = $("#input18").val();
    var t = $("#input19").val();
    var u = $("#input20").val();
    var v = $("#input21").val();
    var w = $("#input22").val();
    var x = $("#input23").val();
    var y = $("#input24").val();
    var z = $("#input25").val();

    if((a=== zero) || (a === one) || (a === two) || (a === three) ||     (a === four) || (a === five)){
        $("#output").text('fail');
     } else if((b===zero) || (b===one) ||(b===two)||(b===three)||(b===four)||(b===five)){
      $("#output").text('fail');
     }else if((c===zero)||(c===one)||(c===two)||(c===three)||(c===four)||(c===five)){
      $("#output").text('fail');
     }else if((d===six)||(d===seven)||(d===eight)||(d===nine)||(d===ten)||(d===eleven)||(d===twelve)){
      $("#output").text('fail');
     }else if((e===six)||(e===seven)||(e===eight)||(e===nine)||(e===ten)||(e===eleven)||(e===twelve)){
      $("#output").text('fail');
      }else if((f===thirteen)||(f===fourteen)||(f===fifteen)||(f===sixteen)){
      $("#output").text('fail');
      }else if((g===thirteen)||(g===fourteen)||(g===fifteen)||(g===sixteen)){
      $("#output").text('fail');
      }else if((h===thirteen)||(h===fourteen)||(h===fifteen)||(h===sixteen)){
      $("#output").text('fail');
      }else if((i===thirteen)||(i===fourteen)||(i===fifteen)||(i===sixteen)){
      $("#output").text('fail');
      }else if((j===thirteen)||(j===fourteen)||(j===fifteen)||(j===sixteen)){
      $("#output").text('fail');
      }else if((k===fortyfour)||(k===fourtyfive)||(k===fourtysix)||(k===fourtyseven)||(k===fourtyeight)||(k===fourtynine)){
      $("#output").text('fail');
      }else if((l===fortyfour)||(l===fourtyfive)||(l===fourtysix)||(l===fourtyseven)||(l===fourtyeight)||(l===fourtynine)){
      $("#output").text('fail');
      }else if((m===fortyfour)||(m===fourtyfive)||(m===fourtysix)||(m===fourtyseven)||(m===fourtyeight)||(m===fourtynine)){
      $("#output").text('fail');
      }else if((n===fifty)||(n===fiftyone)||(n===fiftytwo)||(n===fiftythree)||(n===fiftyfour)||(n===fiftyfive)){
      $("#output").text('fail');
      }else if((o===fifty)||(o===fiftyone)||(o===fiftytwo)||(o===fiftythree)||(o===fiftyfour)||(o===fiftyfive)){
      $("#output").text('fail');
      }else if((p===fifty)||(p===fiftyone)||(p===fiftytwo)||(p===fiftythree)||(p===fiftyfour)||(p===fiftyfive)){
      $("#output").text('fail');
      }else if((q===fiftysix)||(q===fiftyseven)||(q===fiftyeight)||(q===fiftynine)||(q===sixty)||(q===sixtyone)){
      $("#output").text('fail');
      }else if((r===fiftysix)||(r===fiftyseven)||(r===fiftyeight)||(r===fiftynine)||(r===sixty)||(r===sixtyone)){
      $("#output").text('fail');
      }
      
}

var checkColumn = function(){

}

var checkSquare = function(){

}












var reset = function(){
    $("input").val("");
    $("#output").text("");
}
