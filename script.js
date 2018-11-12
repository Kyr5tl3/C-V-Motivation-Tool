
$('.wedge > img').css({'opacity':'1'});

$('.release > button').click(function(){
  console.log('release button clicked')
  event.preventDefault();
  $('.wedge > button').hide();
  $('.release > .descriptions').show();
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecap');
})


// Reset button headings
$('.centrecap > button').click(function(){
  $('.centrecap > button').html('CRAFT BRINGS THE SOUL BACK INTO BEER');
  $('.centrecap > button').
  $('button').show();
  $('.descriptions').hide()
  $('.centrecap > button').removeClass('centrecap');
})
