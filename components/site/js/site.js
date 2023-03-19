var $content = $('.menu-content');

function showContent(selector) {
  $content.hide();
  $(selector).show();
}

$('.menu').on('click', '.menu-btn', function(e) {
  //show content
  showContent(e.currentTarget.hash);
  e.preventDefault();
}); 
// show '#about' content only on page load (if you want)
showContent('#btn-site-new');


//active class
$('.menu-btn').click(function(){
  $('.menu-btn').removeClass('active');   // it remove all the active links
  $(this).addClass('active');    // it adds active class to the current link you have opened
})


