
$('.wedge > img').css({'opacity':'1'});

//Release button functions
$('.release > button').click(function(){
  event.preventDefault();
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.release > .descriptions').show();
  $('.excitement > .descriptions').show();
  $('.sociability > .descriptions').show();
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart');
  $('.status > img').css({'opacity':'0.1'});
  $('.recognition > img').css({'opacity':'0.1'});
  $('.control > img').css({'opacity':'0.1'});
  $('.comfort > img').css({'opacity':'0.1'});
  $('.belonging > img').css({'opacity':'0.1'});
})

//Sociability button functions
$('.sociability > button').click(function(){
  event.preventDefault();
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.sociability > .descriptions').show();
  $('.belonging > .descriptions').show();
  $('.release > .descriptions').show();
  $('.excitement > .descriptions').show();
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart');
  $('.status > img').css({'opacity':'0.1'});
  $('.recognition > img').css({'opacity':'0.1'});
  $('.control > img').css({'opacity':'0.1'});
  $('.comfort > img').css({'opacity':'0.1'});
})

//Sociability button functions
$('.sociability > button').click(function(){
  event.preventDefault();
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.sociability > .descriptions').show();
  $('.belonging > .descriptions').show();
  $('.release > .descriptions').show();
  $('.excitement > .descriptions').show();
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart');
  $('.status > img').css({'opacity':'0.1'});
  $('.recognition > img').css({'opacity':'0.1'});
  $('.control > img').css({'opacity':'0.1'});
  $('.comfort > img').css({'opacity':'0.1'});
})

//Belonging button functions
$('.belonging > button').click(function(){
  event.preventDefault();
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.sociability > .descriptions').show();
  $('.belonging > .descriptions').show();
  $('.comfort > .descriptions').show();
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart');
  $('.release > img').css({'opacity':'0.1'});
  $('.excitement > img').css({'opacity':'0.1'});
  $('.status > img').css({'opacity':'0.1'});
  $('.recognition > img').css({'opacity':'0.1'});
  $('.control > img').css({'opacity':'0.1'});
})

//Comfort button functions
$('.comfort > button').click(function(){
  event.preventDefault();
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.recognition > .descriptions').show();
  $('.control > .descriptions').show();
  $('.comfort > .descriptions').show();
  $('.belonging > .descriptions').show();
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart');
  $('.status > img').css({'opacity':'0.1'});
  $('.excitement > img').css({'opacity':'0.1'});
  $('.release > img').css({'opacity':'0.1'});
  $('.sociability > img').css({'opacity':'0.1'});
})

//Control button functions
$('.control > button').click(function(){
  event.preventDefault();
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.recognition > .descriptions').show();
  $('.control > .descriptions').show();
  $('.comfort > .descriptions').show();
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart');
  $('.status > img').css({'opacity':'0.1'});
  $('.excitement > img').css({'opacity':'0.1'});
  $('.release > img').css({'opacity':'0.1'});
  $('.sociability > img').css({'opacity':'0.1'});
  $('.belonging > img').css({'opacity':'0.1'});
})

//Recognition button functions
$('.recognition > button').click(function(){
  event.preventDefault();
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.recognition > .descriptions').show();
  $('.control > .descriptions').show();
  $('.comfort > .descriptions').show();
  $('.status > .descriptions').show();
  $('.excitement > .descriptions').show();
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart');
  $('.release > img').css({'opacity':'0.1'});
  $('.sociability > img').css({'opacity':'0.1'});
  $('.belonging > img').css({'opacity':'0.1'});
})

//Status button functions
$('.status > button').click(function(){
  event.preventDefault();
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.status > .descriptions').show();
  $('.excitement > .descriptions').show();
  $('.recognition > .descriptions').show();
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart');
  $('.release > img').css({'opacity':'0.1'});
  $('.sociability > img').css({'opacity':'0.1'});
  $('.control > img').css({'opacity':'0.1'});
  $('.comfort > img').css({'opacity':'0.1'});
  $('.belonging > img').css({'opacity':'0.1'});
})

//Excitement button functions
$('.excitement > button').click(function(){
  event.preventDefault();
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.release > .descriptions').show();
  $('.excitement > .descriptions').show();
  $('.status > .descriptions').show();
  $('.recognition > .descriptions').show();
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart');
  $('.sociability > img').css({'opacity':'0.1'});
  $('.control > img').css({'opacity':'0.1'});
  $('.comfort > img').css({'opacity':'0.1'});
  $('.belonging > img').css({'opacity':'0.1'});
})

// Reset button headings
$('.centrecap > button').click(function(){
  $('.centrecap > button').html('CRAFT BRINGS THE SOUL BACK INTO BEER');
  $('button').show();
  $('.caps').show();
  $('.descriptions').hide()
  $('.centrecap > button').removeClass('centrecapRestart');
  $('.wedge > img').css({'opacity':'1'});
})
