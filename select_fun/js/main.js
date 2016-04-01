/**
*
* Part 1:
*
*/

// 1. Go to style.css and add a class called fun. Style that class with your choice of background-color and text color.

// 2. Using jQuery, add the fun class to the elements with the class .box
$('.box').addClass('fun');
// 3. When #box2 is clicked on
$('#box2').on('click', function() {
	// a) Remove the crazy class from all the items with a class of .box
	$('#box2').removeClass('crazy');
	// b) Add the crazy class to the h1
	$('h1').addClass('crazy');
	// c) Slide toggle #box3
	$('#box3').slideToggle(300);
});

// 4. When any .box is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
$('.box').on('click', function() {
	$('h1').text('jQuery Ninja');
});

// 5. Have the following code execute when the #box1 is clicked. Write a JavaScript comment with a description of what happened. 
// $(".moto").attr("src", "images/moto.jpg");
// Whenever #box1 is clicked, an image appears.
$('#box1').on('click', function() {
	$(".moto").attr("src", "images/moto.jpg");
});

/**
*
* Part 2:
*
*/

// 6. Hide the item with the id #dropdownMenu


// 7. When the element with the id #dropdownButton is clicked,
	// a) slide toggle #dropdownMenu



/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2


// 9. Show the item with the id #answer1


// 10. When #question2 is clicked:
	// a) Slide down #answer2
	// b) Slide up #answer1
	// c) Remove the active class from all list items
	// d) Add the active class to #question2


// 11. When #question1 is clicked:
	// a) Slide down #answer1
	// b) Slide up #answer2
	// c) Remove the active class from all list items
	// d) Add the active class to #question1
