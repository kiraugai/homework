// when the user clicks on the "fahrenheit_to_celsius" button
$('#fahrenheit_to_celsius').on('click', function () {
 	// grab the value from #temperature AND store in variable fahrenheit
 	var fahrenheit = $('#temperature').val();
 	// convert that value to a number
 	fahrenheit = parseFloat(fahrenheit);
 	// convert to celsius by using formula (fahrenheit - 32) / 1.8; AND store in variable celsius
 	var celsius = (fahrenheit - 32) / 1.8;
 	// display in #result
 	$('#result').html(celsius);
});
// when the user clicks on the "celsius_to_fahrenheit" button
 	// grab the value from #temperature AND store in variable celsius
 $('#celsius_to_fahrenheit').on('click', function() {
 	// convert that value to a number
 	var celsius = $('#temperature').val();
 	// convert to fahrenheit by using formula 1.8 * celsius + 32; AND store in variable fahrenheit
 	var fahrenheit = 1.8 * celsius + 32;
 	// display in #result
 	$('#result').html(fahrenheit);
 });