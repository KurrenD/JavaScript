function handleThumbnailClicks() {
  $('.thumbnail').click(function(event) {
    var imgSrc = $(event.currentTarget).find('img').attr('src');
    $('.hero img').attr('src', imgSrc);
  })
}

$(function() {
  handleThumbnailClicks();
});

function handleBulbClicks() {
  $('.lightbulb').click(function(event){
    $('.lightbulb').removeClass('bulb-on');
 $(event.currentTarget).addClass('bulb-on')
  });  
}

$(function() {
  handleBulbClicks();
});