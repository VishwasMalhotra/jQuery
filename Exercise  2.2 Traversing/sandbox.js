$(document).ready(function() {
    // 1. Select all of the image elements on the page; log each image's alt attribute.
    $('img').each(function() {
        if (this.alt) {
            console.log(this.alt);
        }
    });

    // 2. Select the search input text box, then traverse up to the form and add a class to the form.
	
    $('input[type=text]').parent().addClass();

    // 3. Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.

    var change = $('li.current');
    change.removeClass().next().addClass("current");

    // 4. Select the select element inside #specials; traverse your way to the submit button.
	
    var selectElement = $('.module').find('form li:nth-child(1)');
    selectElement.next();

    // 5. Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
	
    var firstItem = $('ul#slideshow li:nth-child(1)').addClass("current");
    firstItem.siblings().addClass("disabled");
});

