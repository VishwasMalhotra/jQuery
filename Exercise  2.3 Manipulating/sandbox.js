$(document).ready(function() {

// 1. Add five new list items to the end of the unordered list #myList.

	$('#myList').append('<li> New item 1 </li>');
	$('#myList').append('<li> New item 2 </li>');
	$('#myList').append('<li> New item 3 </li>');
	$('#myList').append('<li> New item 4 </li>');
	$('#myList').append('<li> New item 5 </li>');
	
// 2. Remove the odd list items
	$('li:odd').remove();
	

// 3. Add another h2 and another paragraph to the last div.module
	$('#specials').append('<h2>' + 'New Heading' + '</h2>' + '<p>' + 'This is the new paragraph' + '</p>')

// 4. Add another option to the select element; give the option the value "Wednesday"
	$('select').append('<option val="1"> Wednesday </option>');
	
});

