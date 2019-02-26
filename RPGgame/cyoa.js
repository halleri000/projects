var unicornLauncherAndArmor = false;
var superSpeedDrink = false;

$(document).ready(function() {

  $('footer').html(createButton("button1", O1) + createButton("button2", O2) + createButton("button3", O3) + createButton("button4", "Restart"));

  updateNarrative(N1);
  $('#button4').hide();
  $('#button3').hide();

  //CHARACTER ONE STORY//

  $("#button1").click(function() {
    if ($('#button1').text() === O1) {
     $('#kukluck').show();
      updateNarrative(N2);
      $('#button3').show();
      updateButtons(O3, O4, O5);
    } else if ($('#button1').text() === O3) {
      $('#kukluck').hide();
      updateNarrative(N4);
      $("#w1").hide();
      $('#button2').show();
      $('#button3').hide();
      updateButtons(O9, O10);
    } else if ($('#button1').text() === O9) {
      updateNarrative(N8);
      hideButton();
      restart();
    }

    $('#button2').click(function() {
      if ($('#button2').text() === O4) {
        updateNarrative(W1);
        $('#w1').show();
          $('#kukluck').hide();
        $('#button2').hide();
      } else if ($('#button2').text() === O10) {
        updateNarrative(N9);
        hideButton();
        restart();
      }
    })

    $('#button3').click(function() {
      if ($('#button3').text() === O5) {
        updateNarrative(N5);
    
        $("#w1").hide();
          $('#kukluck').hide();
        $('#button2').show();
        $('#button3').hide();
        updateButtons(O11, O12);
      }

      $('#button1').click(function() {
        if ($('#button1').text() === O11) {
          updateNarrative(N10);
          hideButton();
          restart();
        }
      })

      $('#button2').click(function() {
        if ($('#button2').text() === O12) {
          updateNarrative(N11);
          hideButton();
          restart();
        }
      })
    })
  })

  //CHARACTER TWO STORY//

  $("#button2").click(function() {
    if ($('#button2').text() === O2) {
    $("#cow").show();
      updateNarrative(N3);
      $("#button3").show();
      updateButtons(O6, O7, O8);
    } else if ($('#button2').text() === O7) {
      updateNarrative(W2);
       $("#cow").hide();
      $('#button2').hide();
    } else if ($('#button2').text() === O14) {
      updateNarrative(N13);
      hideButton();
      restart();
    } else if ($('#button2').text() === O16) {
      updateNarrative(N15);
      hideButton();
      restart();
    }
    $("#button1").click(function() {
      if ($('#button1').text() === O6) {
        updateNarrative(N6);
         $("#cow").hide();
        $("#button2").show();
        $('#button3').hide();
        updateButtons(O13, O14);
      }
      $("#button1").click(function() {
        if ($('#button1').text() === O13) {
          updateNarrative(N12);
          hideButton();
          restart();
        } else if ($('#button1').text() === O15) {
          updateNarrative(N14);
          hideButton();
          restart();
        }
      })
    })
    $('#button3').click(function() {
      if ($('#button3').text() === O8) {
       $("#cow").hide();
        updateNarrative(N7);
        updateButtons(O15, O16, O17);
      } else if ($('#button3').text() === O17) {
        updateNarrative(N16);
        hideButton();
        restart();
      }
    })
  })


});

var N1 = " There once was an ancient race of warriors named the... "
var N2 = " The leader was a well known warrior that has killed the biggest of monsters and won every battle he was been in. Before the last battle that would determine that fate of the kingdom he went to... "

var N3 = " The most well known soldier in the moo moo pals was named. Auhsoj Ecitsuj. He was having a good time at the fair with his family when suddenly a group of try gender pyro foxes killed his family before he could react. He killed them all knowing who sent them because of the insignia they had. He went to...  "

var N4 = " The battle lasted for days with thousands casualities and no sign of slowing down anytime soon. He decided to... "
var N5 = " You broke into the enemy's castle. There was high levels of security every where. You went in... "

var N6 = " you found the mainheadquarters of the man that hired the assassins. This headquarters was like a fortress with guards everywhere. You..."
var N7 = " One you way out of the kingdom some ofthe assassins saw you and cut you off. YOu were taken to a dungeon and were tortured for what seemed like months. One night you were able to snag the keys to the cell from a guard. You... "

var N8 = " The rocket caused a nuclear war far destroying almost all life on earth "
var N9 = " The battle lasted only two more days before the enemy decided to surrender "
var N10 = " You got into the kings chamber and was able to kill him without anyone notices what happened. The kingdom fell in less than a week and you controlled all of the land. "
var N11 = " You got into a huge gun fight and the king got away. You died after taking a large majority of the guards out but the actual battle continued for weeks more until the Kuklukonians lost. "

var N12 = " The guards caught onto who you where and alerted theman you were after. He left and the headquarters went on lock down and was destroyed by a self destruct sequence. Every one there as instantly vaporzed "
var N13 = " You were able to eliminate everyone there before anyone noticing using your superspeed. You got into the targets room and got into a fight. YOu ended up stabbing him and winning and getting revenge."
var N14 = " Some other prisoners saw you attempting to escape and decided to shank you and steal the keys to allow them to escape. You were then killed by a the guards."
var N15 = " You help 15 other prisoners escape but you fell into a pit just after getting away from the prison.None of the others tried to help you causing you to die by starvation. "
var N16 = " You escaped and got away to the next kingdom.You are now wanted dead or alive with a $5million bounty. You then started a new life and never looked back."

var W1 = " He got his trusty unicorn launcher and armor "
var W2 = " He got an old super speed potion "
var O1 = " Kuklukonians "

var O2 = " moo moo pals "

var O3 = " fight "
var O4 = " The armory "
var O5 = " To kill the enemy's leader"

var O6 = " hunt down the people "
var O7 = " his house "
var O8 = " leave the kingdom "

var O9 = " nuke the enemy's kingdom "
var O10 = " stay and fight  "
var O11 = " stealthily "
var O12 = " guns blazing "

var O13 = " manipulated the guards "
var O14 = " killed everyone"
var O15 = " tried to escape during a riot"
var O16 = " tried to help others "
var O17 = " tried to escape in the middle of the night "

var restart = function() {
  $('#button4').show();
  $('#button4').click(function() {
    updateNarrative(N1);
    $('#button4').hide();
    $('#button3').hide();
    $('#button1').show();
    $('#button2').show();
    updateButtons(O1, O2);

  })
}
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
