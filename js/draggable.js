$(function() {
  var count = $('.palet').find('.draggable').length;
  if(count==0){
    $('.none-asset').css('display', 'flex');
  }
  do_draggable();
});

function add_assets(input_txt){
  input_txt = input_txt.replace(/\r?\n/g,"<br>");
  var b_color = get_random_bg_color();
  var count = $('#contents').find('.draggable').length;
  $('.none-asset').css('display', 'none');
  $('.palet').append('<div class="draggable '+b_color+' ui-draggable circle asset-'+(count+=1)+'">'+input_txt+'</div>');
  do_draggable();
}

function do_draggable(){
  $(".draggable").draggable({ containment: ".palet" });
}

$(document).ready(function(){
  $('.add-idea').on('click',function(){
    $(".input-modal").fadeIn(700).css('display','table');
  });

  $(".input-modal").on('click touchend',function(event){
    if(!$(event.target).closest('.inner-item').length){
      $(".input-modal").fadeOut(700);
    } else if($(event.target).closest('.submit-button').length){
      add_assets($('.modal-item').find('textarea').val());
      $(".input-modal").fadeOut(700);
    }
  });
});

function get_random_b_color(){
  var b_color = "";
  var arr_b_color = [
    "b-brown","b-gray",
    "b-light-brown","b-pale-purple","b-pale-plum",
    "b-pale-ocher","b-pale-beige","b-blue-gray",
    "b-pale-green","b-red-brown","b-ice-gray",
    "b-pale-yellow-green"
  ];
  b_color = get_random_value(arr_b_color);
  return b_color;
}

function get_random_bg_color(){
  var bg_color = "";
  var arr_bg_color = [
    "bg-brown","bg-gray",
    "bg-light-brown","bg-pale-purple","bg-pale-plum",
    "bg-pale-ocher","bg-pale-beige","bg-blue-gray",
    "bg-pale-green","bg-red-brown","bg-ice-gray",
    "bg-pale-yellow-green"
  ];
  bg_color = get_random_value(arr_bg_color);
  return bg_color;
}

function get_random_value(array){
  var value = array[Math.floor(Math.random() * array.length)];
  return value;
}
