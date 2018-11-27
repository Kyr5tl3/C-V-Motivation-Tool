
$('.wedge > img').css({'opacity':'1'});

// on load
$(window).on('load', function(){
  toolHeight();
  textResize();
});

// on resize
$(window).resize( function(){
  toolHeight();
  textResize();
});

// set height of motivational tool div
function toolHeight() {
    let width = $('.motivationtool').width();
    let height = width * 0.78 + 'px';
    $('.motivationtool').css({'height':height});
};

// resize text
function textResize(){
  let width = $('.motivationtool').width();
  let h4FontSize = width * 0.018 +'px';
  let buttonFontSize = width * 0.03 + 'px';
  let centrecapFontSize = width * 0.024 +'px';

  $('.caps > h4').css({'font-size':h4FontSize});
  $('.wedge > button').css({'font-size':buttonFontSize});
  $('.centrecap > button').css({'font-size':centrecapFontSize});

}

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
  $('.release').css({'background-size':'cover'});
  $('.release > .descriptions > h4').css({'color':'#825102'});
  $('.sociability > img').css({'opacity':'0.7'});
  $('.excitement > img').css({'opacity':'0.7'});
});

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
  $('.sociability').css({'background-size':'cover'});
  $('.sociability > .descriptions > h4').css({'color':'#af8404'});
  $('.release > img').css({'opacity':'0.7'});
  $('.excitement > img').css({'opacity':'0.7'});
  $('.belonging > img').css({'opacity':'0.7'});
});


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
  $('.belonging').css({'background-size':'cover'});
  $('.belonging > .descriptions > h4').css({'color':'#3e331e'});
  $('.sociability > img').css({'opacity':'0.7'});
  $('.comfort > img').css({'opacity':'0.7'});
});

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
  $('.comfort').css({'background-size':'cover'});
  $('.comfort > .descriptions > h4').css({'color':'#052741'});
  $('.control > img').css({'opacity':'0.7'});
  $('.recognition > img').css({'opacity':'0.7'});
  $('.belonging > img').css({'opacity':'0.7'});
});

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
  $('.control').css({'background-size':'cover'});
  $('.control > .descriptions > h4').css({'color':'#052741'});
  $('.comfort > img').css({'opacity':'0.7'});
  $('.recognition > img').css({'opacity':'0.7'});
});

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
  $('.recognition').css({'background-size':'cover'});
  $('.recognition > .descriptions > h4').css({'color':'#052741'});
  $('.excitement > img').css({'opacity':'0.7'});
  $('.status > img').css({'opacity':'0.7'});
  $('.control > img').css({'opacity':'0.7'});
  $('.comfort > img').css({'opacity':'0.7'});
});

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
  $('.status').css({'background-size':'cover'});
  $('.status > .descriptions > h4').css({'color':'#052741'});
  $('.excitement > img').css({'opacity':'0.7'});
  $('.recognition > img').css({'opacity':'0.7'});
});

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
  $('.excitement').css({'background-size':'cover'});
  $('.excitement > .descriptions > h4').css({'color':'#052741'});
  $('.release > img').css({'opacity':'0.7'});
  $('.status > img').css({'opacity':'0.7'});
  $('.recognition > img').css({'opacity':'0.7'});
});

// Reset button headings
$('.centrecap > button').click(function(){
  event.preventDefault();
  $('.centrecap > button').html('CRAFT BRINGS THE SOUL BACK INTO BEER');
  $('button').show();
  $('.caps').show();
  $('.descriptions').hide();
  $('.centrecap > button').removeClass('centrecapRestart');
  $('.wedge').css({'background-size':'0,0'});
  $('.wedge > img').css({'opacity':'1'});
  $('.wedge > .descriptions > h4').css({'color':'rgb(0,0,0)'});
});




//Sociability button functions
// $('.sociability > button').click(function(){
//   event.preventDefault();
//   $('.wedge > button').hide();
//   $('.caps').hide();
//   $('.sociability > .descriptions').show();
//   $('.belonging > .descriptions').show();
//   $('.release > .descriptions').show();
//   $('.excitement > .descriptions').show();
//   $('.centrecap > button').html('RESTART');
//   $('.centrecap > button').addClass('centrecapRestart');
//   $('.status > img').css({'opacity':'0.1'});
//   $('.recognition > img').css({'opacity':'0.1'});
//   $('.control > img').css({'opacity':'0.1'});
//   $('.comfort > img').css({'opacity':'0.1'});
// });
