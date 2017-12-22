$(function() {
  var count = $('.palet').find('.draggable').length;
  if(count==0){
    $('.none-asset').css('display', 'flex');
  }
  do_draggable();
});

function add_assets(){
  var count = $('#contents').find('.draggable').length;
  $('.none-asset').css('display', 'none');
  $('.palet').append('<div class="draggable b-red ui-draggable">要素'+(count+=1)+'</div>');
  do_draggable();
}

function do_draggable(){
  $(".draggable").draggable({ containment: ".palet" });
}
