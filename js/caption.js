$(document).ready(function(){
  $('.capture').on('click',function(){
    html2canvas(document.querySelector("#contents")).then(canvas => {
      document.body.appendChild(canvas).fadeIn(700);
    });
  });
});
