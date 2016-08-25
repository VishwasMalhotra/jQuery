$(document).ready(function() {
    $('body').prepend($('#slideshow'));
    $('#slideshow li').append('<p id = "navigation"> </p>');
    var i = 0;
    $len = $('#slideshow li').length;
    slideChange();
    setInterval(function() {
        slideChange();
    }, 3000);

    function slideChange() {


        $('#slideshow li').hide().eq(i).fadeIn(1000).delay(1000).fadeOut(1000).siblings().hide();

        $('#slideshow li').find('#navigation').text(i + 1 + ' of ' + $len);
        i++;
    }

});