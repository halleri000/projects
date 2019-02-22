$(document).ready(function() {

    $('footer').html(createButton("button1", O1) + createButton("button2", O2) + createButton("button3", O3));
  
    updateNarrative(N1);
    $('#button3').hide();
    
  //CHARACTER ONE STORY//
  
    $("#button1").click(function() {
      if ($('#button1').text() === O1) {
        updateNarrative(N2);
        $('#button3').show();
        updateButtons(O3, O4, O5);
      } else if ($('#button1').text() === O3) {
        updateNarrative(N4);
        $('#button3').hide();
        updateButtons(O9, O10);
      } else if ($('#button1').text() === O9) {
        updateNarrative(N8);
        hideButton();
      }
      $('#button2').click(function() {
        if ($('#button2').text() === O4) {
          updateNarrative(W1);
          $('#button2').hide();
        } else if ($('#button2').text() === O10) {
          updateNarrative(N9);
        hideButton();
        }
      })
      $('#button3').click(function() {
        if ($('#button3').text() === O5) {
          updateNarrative(N5);
          $('#button3').hide();
          updateButtons(O11, O12);
        } 
        
        $('#button1').click(function(){
        if ($('#button1').text() === O11) {
          updateNarrative(N10);
        hideButton();
        }
        })
        $('#button2').click(function(){
            if($('#button2').text() === O12) {
              updateNarrative(N11);
        hideButton();
          }
        })
      })
    })
    
    //CHARACTER TWO STORY//
      $("#button2").click(function() {
         if ($('#button2').text() === O2) {
        updateNarrative(N3);
        $('#button3').show();
        updateButtons(O6, O7, O8);
        }
         if ($('#button2').text() === O7) {
          updateNarrative(W2);
          $('#button2').hide();
        } else if ($('#button2').text() === O12) {
          updateNarrative(N13);
        hideButton();
        }
     // if ($('#button2').text() === O2) {
       // updateNarrative(N3);
       // $('#button3').show();
       // updateButtons(O6, O7, O8);
     // }else if ($('#button1').text() === O8) {
      //  updateNarrative(N7);
       // $('#button3').hide();
      //  updateButtons(O14, O15, O16);
    //  } else if ($('#button1').text() === O16) {
    //    updateNarrative(N16);
      //  hideButton();
     // }
      $('#button2').click(function() {
        if ($('#button2').text() === O4) {
          updateNarrative(W1);
          $('#button2').hide();
        } else if ($('#button2').text() === O10) {
          updateNarrative(N9);
        hideButton();
        }
      })
      $('#button3').click(function() {
        if ($('#button3').text() === O5) {
          updateNarrative(N5);
          $('#button3').hide();
          updateButtons(O11, O12);
        } 
        
        $('#button1').click(function(){
        if ($('#button1').text() === O11) {
          updateNarrative(N10);
        hideButton();
        }
        })
        $('#button2').click(function(){
            if($('#button2').text() === O12) {
              updateNarrative(N11);
        hideButton();
          }
        })
      })
    })
  });
  
  var N1 = "There once was an ancient race of warriors named the... "
  var N2 = "The leader of their army was a very dangerous man who has not lost a battle yet. Before the battle to determine the fate of his kingdom, He went to..."
  var N3 = ""
  var N4 = "He saw one of his old friends get captured by the enemy, so he..."
  var N5 = "5"
  var N6 = "6"
  var N7 = "7"
  var N8 = "You died"
  var N9 = "You got back up and you and the squad saved the guy from the people"
  var N10 = "You died"
  var N11 = "You won"
  var N12 = "12"
  var N13 = "13"
  var N14 = "14"
  var N15 = "15"
  var N16 = "16" 
  var W1 = "He got his trusty unicorn launcher and armor"
  var W2 = "He got his trusty unicorn launcher and armor"
  
  var O1 = "Kuklukonians"
  var O2 = "moo moo boys"
  var O3 = "Defend"
  var O4 = "The armory"
  var O5 = "To the center of the battle"
  var O6 = "F" 
  var O7 = "G"
  var O8 = "H"
  var O9 = "go after them "
  var O10 = "get back up"
  var O11 = "K"
  var O12 = "L"
  var O13 = "M"
  var O14 = "N"
  var O15 = "O"
  var O16 = "P"
  var O17 = "Q"
  var O17 = "R"
  
  var hideButton = function(a, b, c) {
    $("#button1").hide();
    $("#button2").hide();
    $("#button3").hide();
  }
  var updateNarrative = function(a) {
  
    $('article').text(a)
  
  }
  
  var updateButtons = function(a, b, c) {
    $("#button1").text(a);
    $("#button2").text(b);
    $("#button3").text(c);
  }
  
  var createButton = function(id, text) {
  
    return " <button type=button id=" + id + ">" + text + "</button>";
  
  }