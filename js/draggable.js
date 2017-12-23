$(function() {
  var count = $('.palet').find('.draggable').length;
  if(count==0){
    $('.none-asset').css('display', 'flex');
  }
  do_draggable();
});

function add_assets(input_txt){
  var count = $('#contents').find('.draggable').length;
  $('.none-asset').css('display', 'none');
  $('.palet').append('<div class="draggable b-red ui-draggable asset-'+(count+=1)+'">'+input_txt+'</div>');
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
