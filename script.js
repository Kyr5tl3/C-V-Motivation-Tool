
$('.wedge > img').css({'opacity':'1'});

// on load
$(window).on('load', function(){
  toolHeight();
  textResize();
  selectedCapSize();
  displayTool();
});

// on resize
$(window).resize( function(){
  toolHeight();
  textResize();
  selectedCapSize()
});

// set height of motivational tool div
function toolHeight() {
    let width = $('.motivationtool').width();
    let height = width * 0.78 + 'px';
    $('.motivationtool').css({'height':height});
};

// set size of selected caps
function selectedCapSize() {
    let width = $('.motivationtool').width();
    let capWidth = width * 0.05 + 'px';
    $('.selectedWedge').css({'width':capWidth});
};

// resize text
function textResize(){
  let width = $('.motivationtool').width();
  let h4FontSize = width * 0.018 +'px';
  let buttonFontSize = width * 0.03 + 'px';
  let centrecapFontSize = width * 0.024 +'px';
  let descriptionsFontSize  = width * 0.014 +'px';

  $('.caps > h4').css({'font-size':h4FontSize});
  $('.descriptions > h4').css({'font-size':h4FontSize});
  $('.wedge > button').css({'font-size':buttonFontSize});
  $('.centrecap > button').css({'font-size':centrecapFontSize});
  $('.descriptions > p').css({'font-size':descriptionsFontSize});
}

// WEDGE SELECTION
//Excitement button functions
$('.excitement > button').click(function(){
  event.preventDefault();
  $('.excitement > .selectedWedge').show();
  $('.excitement > img').attr('src', '/images/segments with shadow/excitement - inner shadow.png');
  $('.excitement > .descriptions > p').css({'color': 'white'});
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.release > .descriptions').delay(1000).fadeIn(1000);
  $('.excitement > .descriptions').fadeIn(1000);
  $('.status > .descriptions').delay(1000).fadeIn(1000);
  $('.recognition > .descriptions').delay(1000).fadeIn(1000);
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart grow');
  $('.sociability > img').fadeTo('slow',0.1);
  $('.control > img').fadeTo('slow',0.1);
  $('.comfort > img').fadeTo('slow',0.1);
  $('.belonging > img').fadeTo('slow',0.1);
  $('.excitement > .descriptions > h4').css({'color':'#d24d4d'});
  $('.release > img').css({'opacity':'0.7'});
  $('.status > img').css({'opacity':'0.7'});
  $('.recognition > img').css({'opacity':'0.7'});
  $('.insight4').css({'opacity':'0.1'});
  $('.insight1, .insight2, .insight3').css({'border':'solid 3px #d24d4d'});
  $('.insight1 h4, .insight2 h4, .insight3 h4, .insightClose').css({'color':'#d24d4d'});
  $('.insightsButton').css({'color':'#d24d4d', 'background-color':'rgba(210, 77, 77, 0.3)','top':'47%','left':'73%'}).show();
});

//Release button functions
$('.release > button').click(function(){
  event.preventDefault();
  $('.release > .selectedWedge').show();
  $('.release > img').attr('src', '/images/segments with shadow/release - inner shadow.png');
  $('.release > .descriptions > p').css({'color': 'white'});
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.release > .descriptions').fadeIn(1000);
  $('.excitement > .descriptions').delay(1000).fadeIn(1000);
  $('.sociability > .descriptions').delay(1000).fadeIn(1000);
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart grow');
  $('.status > img').css({'opacity':'0.1'});
  $('.recognition > img').css({'opacity':'0.1'});
  $('.control > img').css({'opacity':'0.1'});
  $('.comfort > img').css({'opacity':'0.1'});
  $('.belonging > img').css({'opacity':'0.1'});
  $('.release > .descriptions > h4').css({'color':'#e7ac4d'});
  $('.sociability > img').css({'opacity':'0.7'});
  $('.excitement > img').css({'opacity':'0.7'});
  $('.insight3, .insight4').css({'opacity':'0.1'});
  $('.insight1, .insight2').css({'border':'solid 3px #e7ac4d'});
  $('.insight1 h4, .insight2 h4, .insightClose').css({'color':'#e7ac4d'});
  $('.insightsButton').css({'color':'#e7ac4d', 'background-color':'rgb(231, 172, 77, 0.3)','top':'47%','left':'73%'}).show();
});

//Sociability button functions
$('.sociability > button').click(function(){
  event.preventDefault();
  $('.sociability > .selectedWedge').show();
  $('.sociability > img').attr('src', '/images/segments with shadow/sociability - inner shadow.png');
  $('.sociability > .descriptions > p').css({'color': 'white'});
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.sociability > .descriptions').fadeIn(1000);
  $('.belonging > .descriptions').delay(1000).fadeIn(1000);
  $('.release > .descriptions').delay(1000).fadeIn(1000);
  $('.excitement > .descriptions').delay(1000).fadeIn(1000);
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart grow');
  $('.status > img').css({'opacity':'0.1'});
  $('.recognition > img').css({'opacity':'0.1'});
  $('.control > img').css({'opacity':'0.1'});
  $('.comfort > img').css({'opacity':'0.1'});
  $('.sociability > .descriptions > h4').css({'color':'#fcd04d'});
  $('.release > img').css({'opacity':'0.7'});
  $('.excitement > img').css({'opacity':'0.7'});
  $('.belonging > img').css({'opacity':'0.7'});
  $('.insight3').css({'opacity':'0.1'});
  $('.insight1, .insight2, .insight4').css({'border':'solid 3px #fcd04d'});
  $('.insight1 h4, .insight2 h4, .insight4 h4, .insightClose').css({'color':'#fcd04d'});
  $('.insightsButton').css({'color':'#fcd04d', 'background-color':'rgba(252, 208, 77, 0.3)','top':'47%','left':'5%'}).show();
});


//Belonging button functions
$('.belonging > button').click(function(){
  event.preventDefault();
  $('.belonging > .selectedWedge').show();
  $('.belonging > img').attr('src', '/images/segments with shadow/belonging - inner shadow.png');
  $('.belonging > .descriptions > p').css({'color': 'white'});
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.sociability > .descriptions').delay(1000).fadeIn(1000);
  $('.belonging > .descriptions').fadeIn(1000);
  $('.comfort > .descriptions').delay(1000).fadeIn(1000);
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart grow');
  $('.release > img').css({'opacity':'0.1'});
  $('.excitement > img').css({'opacity':'0.1'});
  $('.status > img').css({'opacity':'0.1'});
  $('.recognition > img').css({'opacity':'0.1'});
  $('.control > img').css({'opacity':'0.1'});
  $('.belonging > .descriptions > h4').css({'color':'#b1955e'});
  $('.sociability > img').css({'opacity':'0.7'});
  $('.comfort > img').css({'opacity':'0.7'});
  $('.insight1, .insight3').css({'opacity':'0.1'});
  $('.insight2, .insight4').css({'border':'solid 3px #b1955e'});
  $('.insight2 h4, .insight4 h4, .insightClose').css({'color':'#b1955e'});
  $('.insightsButton').css({'color':'#b1955e', 'background-color':'rgba(177, 149, 94, 0.3)','top':'47%','left':'5%'}).show();
});

//Comfort button functions
$('.comfort > button').click(function(){
  event.preventDefault();
  $('.comfort > .selectedWedge').show();
  $('.comfort > img').attr('src', '/images/segments with shadow/comfort - inner shadow.png');
  $('.comfort > .descriptions > p').css({'color': 'white'});
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.recognition > .descriptions').delay(1000).fadeIn(1000);
  $('.control > .descriptions').delay(1000).fadeIn(1000);
  $('.comfort > .descriptions').fadeIn(1000);
  $('.belonging > .descriptions').delay(1000).fadeIn(1000);
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart grow');
  $('.status > img').css({'opacity':'0.1'});
  $('.excitement > img').css({'opacity':'0.1'});
  $('.release > img').css({'opacity':'0.1'});
  $('.sociability > img').css({'opacity':'0.1'});
  $('.comfort > .descriptions > h4').css({'color':'#4e9ad2'});
  $('.control > img').css({'opacity':'0.7'});
  $('.recognition > img').css({'opacity':'0.7'});
  $('.belonging > img').css({'opacity':'0.7'});
  $('.insight1').css({'opacity':'0.1'});
  $('.insight2, .insight3, .insight4').css({'border':'solid 3px #4e9ad2'});
  $('.insight2 h4, .insight3 h4, .insight4 h4, .insightClose').css({'color':'#4e9ad2'});
  $('.insightsButton').css({'color':'#4e9ad2', 'background-color':'rgba(78, 154, 210, 0.3)','top':'47%','left':'5%'}).show();
});

//Control button functions
$('.control > button').click(function(){
  event.preventDefault();
  $('.control > .selectedWedge').show();
  $('.control > img').attr('src', '/images/segments with shadow/control - inner shadow.png');
  $('.control > .descriptions > p').css({'color': 'white'});
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.recognition > .descriptions').delay(1000).fadeIn(1000);
  $('.control > .descriptions').fadeIn(1000);
  $('.comfort > .descriptions').delay(1000).fadeIn(1000);
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart grow');
  $('.status > img').css({'opacity':'0.1'});
  $('.excitement > img').css({'opacity':'0.1'});
  $('.release > img').css({'opacity':'0.1'});
  $('.sociability > img').css({'opacity':'0.1'});
  $('.belonging > img').css({'opacity':'0.1'});
  $('.control > .descriptions > h4').css({'color':'#f2f2f2'});
  $('.comfort > img').css({'opacity':'0.7'});
  $('.recognition > img').css({'opacity':'0.7'});
  $('.insight1, .insight2').css({'opacity':'0.1'});
  $('.insight3, .insight4').css({'border':'solid 3px #4d4d4d'});
  $('.insight3 h4, .insight4 h4, .insightClose').css({'color':'#4d4d4d'});
  $('.insightsButton').css({'color':'#4d4d4d', 'background-color':'rgba(77, 77, 77, 0.3)','top':'47%','left':'5%'}).show();
});

//Recognition button functions
$('.recognition > button').click(function(){
  event.preventDefault();
  $('.recognition > .selectedWedge').show();
  $('.recognition > img').attr('src', '/images/segments with shadow/recognition - inner shadow.png');
  $('.recognition > .descriptions > p').css({'color': 'white'});
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.recognition > .descriptions').fadeIn(1000);
  $('.control > .descriptions').delay(1000).fadeIn(1000);
  $('.comfort > .descriptions').delay(1000).fadeIn(1000);
  $('.status > .descriptions').delay(1000).fadeIn(1000);
  $('.excitement > .descriptions').show();
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart grow');
  $('.release > img').css({'opacity':'0.1'});
  $('.sociability > img').css({'opacity':'0.1'});
  $('.belonging > img').css({'opacity':'0.1'});
  $('.recognition > .descriptions > h4').css({'color':'#94cc8a'});
  $('.excitement > img').css({'opacity':'0.7'});
  $('.status > img').css({'opacity':'0.7'});
  $('.control > img').css({'opacity':'0.7'});
  $('.comfort > img').css({'opacity':'0.7'});
  $('.insight2').css({'opacity':'0.1'});
  $('.insight1, .insight3, .insight4').css({'border':'solid 3px #94cc8a'});
  $('.insight1 h4, .insight3 h4, .insight4 h4, .insightClose').css({'color':'#94cc8a'});
  $('.insightsButton').css({'color':'#94cc8a', 'background-color':'rgba(148, 204, 138, 0.3)','top':'47%','left':'73%'}).show();
});

//Status button functions
$('.status > button').click(function(){
  event.preventDefault();
  $('.status > .selectedWedge').show();
  $('.status > img').attr('src', '/images/segments with shadow/status - inner shadow.png');
  $('.status > .descriptions > p').css({'color': 'white'});
  $('.wedge > button').hide();
  $('.caps').hide();
  $('.status > .descriptions').fadeIn(1000);
  $('.excitement > .descriptions').delay(1000).fadeIn(1000);
  $('.recognition > .descriptions').delay(1000).fadeIn(1000);
  $('.centrecap > button').html('RESTART');
  $('.centrecap > button').addClass('centrecapRestart grow');
  $('.release > img').css({'opacity':'0.1'});
  $('.sociability > img').css({'opacity':'0.1'});
  $('.control > img').css({'opacity':'0.1'});
  $('.comfort > img').css({'opacity':'0.1'});
  $('.belonging > img').css({'opacity':'0.1'});
  $('.status > .descriptions > h4').css({'color':'#9b6ebb'});
  $('.excitement > img').css({'opacity':'0.7'});
  $('.recognition > img').css({'opacity':'0.7'});
  $('.insight2, .insight4').css({'opacity':'0.1'});
  $('.insight1, .insight3').css({'border':'solid 3px #9b6ebb'});
  $('.insight1 h4, .insight3 h4, .insightClose').css({'color':'#9b6ebb'});
  $('.insightsButton').css({'color':'#9b6ebb', 'background-color':'rgba(155, 111, 187, 0.3)','top':'47%','left':'73%'}).show();
});

// Check which wedge is highlighted & reset img src that wedge
function resetWedge(){
  let highlightedWedge = $('img[src*="shadow"]').parent().prop('className');
  if (highlightedWedge.indexOf("excitement") >= 0){
    $('.excitement > img').attr('src', '/images/triangles (with curve labels)/excitement.png');
  }
  else if (highlightedWedge.indexOf("release") >= 0) {
    $('.release > img').attr('src', '/images/triangles (with curve labels)/release.png');
  }
  else if (highlightedWedge.indexOf("sociability") >= 0) {
    $('.sociability > img').attr('src', '/images/triangles (with curve labels)/sociability.png');
  }
  else if (highlightedWedge.indexOf("belonging") >= 0) {
    $('.belonging > img').attr('src', '/images/triangles (with curve labels)/belonging.png');
  }
  else if (highlightedWedge.indexOf("comfort") >= 0) {
    $('.comfort > img').attr('src', '/images/triangles (with curve labels)/comfort.png');
  }
  else if (highlightedWedge.indexOf("control") >= 0) {
    $('.control > img').attr('src', '/images/triangles (with curve labels)/control.png');
  }
  else if (highlightedWedge.indexOf("recognition") >= 0) {
    $('.recognition > img').attr('src', '/images/triangles (with curve labels)/recognition.png');
  }
  else if (highlightedWedge.indexOf("status") >= 0) {
    $('.status > img').attr('src', '/images/triangles (with curve labels)/status.png');
  }
  $('.descriptions > p').css({'color': 'black'});
};

// Show Conusmer insights
$('.insightsButton').click(function(){
  event.preventDefault();
  $('.wedgelabels, .centrecap').css({'opacity':'0.4'});
  $('.insights').show();
  $('.insightsButton').hide();
});

// Close Consumer insights
$('.insightClose').click(function(){
  $('.insights').hide();
  $('.wedgelabels, .centrecap').css({'opacity':'1'});
  $('.insightsButton').show();
  resetInsights();
});

// Reset insights
 function resetInsights(){
   $('.insight1, .insight2, .insight3, .insight4').css({'opacity':'1','border':'solid 3px black'});
   $('.insight1 h4, .insight2 h4, .insight3 h4, .insight4 h4,').css({'color':'black'});
 }

// Reset Tool
$('.centrecap > button').click(function(){
  event.preventDefault();
  resetWedge();
  $('.centrecap > button').html('CRAFT BRINGS THE SOUL BACK INTO BEER');
  $('button').fadeIn(1500);
  $('.caps').fadeIn(1000);
  $('.descriptions').hide();
  $('.selectedWedge').hide();
  $('.centrecap > button').removeClass('centrecapRestart grow');
  $('.wedge > img').fadeTo('slow',1);
  $('.wedge > .descriptions > h4').css({'color':'rgb(0,0,0)'});
  $('.insightsButton').hide();
  resetInsights();
});



// ANIMATIONS
// fade in on page load
function displayTool(){
  $('.excitement').fadeIn(3000);
  $('.release').delay(250).fadeIn(3000);
  $('.sociability').delay(500).fadeIn(3000);
  $('.belonging').delay(750).fadeIn(3000);
  $('.comfort').delay(1000).fadeIn(3000);
  $('.control').delay(1250).fadeIn(3000);
  $('.recognition').delay(1500).fadeIn(3000);
  $('.status').delay(1750).fadeIn(3000);
  $('.recognition').delay(2000).fadeIn(3000);
  $('.excitement .caps').delay(2250).fadeIn(1000);
  $('.sociability .caps').delay(2400).fadeIn(1000);
  $('.status .caps').delay(2550).fadeIn(1000);
  $('.recognition .caps').delay(2700).fadeIn(1000);
  $('.comfort .caps').delay(2850).fadeIn(1000);
  $('.centrecap').delay(2500).fadeIn(3000);
};
