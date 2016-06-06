//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {
    console.log('ready');

    $('nav').hide();
    $('section#home').hide();
    $('section#gallery').hide();
    $('section#about').hide();
    $('section#contact').hide();
    $('footer').hide();
    
window.onload=function(){
    $('nav').delay(200).fadeIn();
    $('section#home').delay(700).fadeIn();
    $('footer').delay(200).fadeIn();
};

$('nav ul li#homenav').click(function(){
    $('section#home').delay(500).fadeIn();
    $('section#gallery').fadeOut();
    $('section#about').fadeOut();
    $('section#contact').fadeOut();
});
    
$('nav ul li#gallerynav').click(function(){
    $('section#home').fadeOut();
    $('section#gallery').delay(500).fadeIn();
    $('section#about').fadeOut();
    $('section#contact').fadeOut();
});
    
$('nav ul li#aboutnav').click(function(){
    $('section#home').fadeOut();
    $('section#gallery').fadeOut();
    $('section#about').show();
    $('section#contact').fadeOut();
    
    $('section#about header').css("opacity", "0").delay(200).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#about section#aboutright h2').css("opacity", "0").css("padding-top", "150px").delay(400).animate({
            opacity: 1
        }, 500, 'linear').delay(500).animate({
            padding: 0
        }, 500, 'linear');
    
    $('section#about section#aboutright ul#descrip').css("opacity", "0").delay(2000).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#about section#aboutright ul#icons li#ps').css("opacity", "0").delay(2600).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#about section#aboutright ul#icons li#ai').css("opacity", "0").delay(2800).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#about section#aboutright ul#icons li#id').css("opacity", "0").delay(3000).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#about section#aboutright ul#icons li#ae').css("opacity", "0").delay(3200).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#about section#aboutright ul#icons li#html').css("opacity", "0").delay(3400).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#about section#aboutright ul#icons li#css').css("opacity", "0").delay(3600).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#about section#aboutright ul#icons li#js').css("opacity", "0").delay(3800).animate({
            opacity: 1
        }, 500, 'linear');
});
    
$('nav ul li#contactnav').click(function(){
    $('section#home').fadeOut();
    $('section#gallery').fadeOut();
    $('section#about').fadeOut();
    $('section#contact').stop().show();
    $('section#contact section#contactleft h2').css("opacity", "0").delay(200).animate({
            opacity: 1
        }, 500, 'linear');
    $('section#contact section#contactleft h3').css("opacity", "0").delay(500).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#contact h4').css("opacity", "0").delay(600).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#contact input[name="sender"]').css("opacity", "0").delay(800).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#contact input[name="senderEmail"]').css("opacity", "0").delay(1000).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#contact textarea').css("opacity", "0").delay(1200).animate({
            opacity: 1
        }, 500, 'linear');
    
    $('section#contact h3 input[value="send"]').css("opacity", "0").delay(1400).animate({
            opacity: 1
        }, 500, 'linear');
});

})