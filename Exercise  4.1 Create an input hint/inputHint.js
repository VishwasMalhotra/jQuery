$(document).ready(function() {
    var inputElement = $('input[type=text]');
    inputElement.val("Enter search term");
    inputElement.addClass("hint");
    $("label").remove();
    $(inputElement).focus(function() {
        inputElement.removeClass("hint");
        inputElement.val("");
    });
    $(inputElement).blur(function() {
        inputElement.val("Enter search term");
        inputElement.addClass("hint");

    });
});