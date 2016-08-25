$(document).ready(function() {
    $('.module').hide();
    $('.module:first').before('<ul id = "list"></ul>');
    $('.module h2').each(function() {
        $('#list').append('<li>' + $(this).text() + '</li>');
    });
    $('#list li').each(function(index) {
        $(this).bind("click", function() {
            $(this).addClass('current').siblings().removeClass('current');
            $('.module').hide();
            $('.module').eq(index).show();

        });
    });
    $('#list li:first').click();
});