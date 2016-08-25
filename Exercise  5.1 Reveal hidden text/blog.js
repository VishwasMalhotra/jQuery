$(document).ready(function() {

    $('#blog ul li').each(function(index) {
        $(this).bind("click", function() {
            $('#blog p.excerpt').hide();
            $('#blog p.excerpt').eq(index).css('display', 'inline');

        });
    });

});