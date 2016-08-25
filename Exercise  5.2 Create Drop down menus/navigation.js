$(document).ready(function() {
    var dropDown = $('#nav li:nth-child(3)');
    dropDown.mouseenter(function() {
        $('#nav li ul').css("display", "inline");
    });

    dropDown.mouseleave(function() {
        $('#nav li ul').css("display", "none");
    });
});