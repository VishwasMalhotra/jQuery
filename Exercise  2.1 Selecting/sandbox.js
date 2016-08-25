$(document).ready(function() {
    // 1. Select all of the div elements that have a class of "module".
    $elements = $('.module').find("*");
    console.log($elements);
	
    // 2. Come up with three selectors that you could use to get the third item in the #myList unordered list. Which is the best to use? Why?

		// Selector No. 1 : Best to use, as it directly picks up the third element by its id.
		$selectorOne = $('#myListItem');
		console.log($selectorOne);

		// Selector No. 2
		var $selectorTwo = $('ul#myList li:nth-child(3)');
		console.log($selectorTwo);

		//Sector No. 3
		var $selectorThree = $("ul#myList").find('li:eq(2)');
		console.log($selectorThree);

    // 3. Select the label for the search input using an attribute selector.
	
    var $label = $("label").attr("for", search);
    console.log($label);

    // 4. Figure out how many elements on the page are hidden.
	
    var $hiddenElements = $(":hidden");
    console.log($hiddenElements);

    // 5. Figure out how many image elements on the page have an alt attribute.

    var alt = $("[alt]").length;
    console.log(alt);

    // 6. Select all of the odd table rows in the table body.

    var $oddRows = $('tr:nth-child(odd)');
    console.log($oddRows);

});