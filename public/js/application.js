$(document).ready(function() {
  $(document).on('keyup', function(event){
    if (event.which === 81){
      advance_player('#player1_strip .active')
    }
    else if (event.which === 80){
      advance_player('#player2_strip .active')
    }

    if ($('#player1_strip td:last-child').hasClass('active')){
      player_wins('.player1')
      player_loses('#player2_strip .active')
    } 
    else if ($('#player2_strip td:last-child').hasClass('active')){
      player_wins('.player2')
      player_loses('#player1_strip .active')
    }
  });
});



var advance_player = function(player){
  $(player).removeClass('active').next().addClass('active');
}

var player_wins = function(winner){
  $(winner).show();
}


var player_loses = function(player){
  $(player).removeClass('active');
}

