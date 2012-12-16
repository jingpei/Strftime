$(document).on('ready', function() {
// THIS IS THE TOP OF YOUR PROGRAM



// this is your way to get the text inside the text box:
// $('#input').val();

// this is how to check if the submit button is clicked:
// $('#submit').on('click', function () {
//     /* insert your function to run when the submit button is clicked /*
// });

$('#button').click(function() {
	var today = new Date();
	var mm=(today.getMonth()+1).toString();
	var dd=(today.getDate()).toString();
	var yyyy=(today.getFullYear()).toString();
	var hour = (today.getHours());
	var min =  today.getMinutes();
	var date = (($('#date').val()).replace(/\//g,"")).toString() + ($('#hour').val()).toString() + ($('#minutes').val()).toString();
	today = mm+dd+yyyy+hour+min;
	function calculateTime(args){
		console.log(date);
		console.log(today);
	};
	calculateTime(date);
});





// THIS IS THE BOTTOM OF YOUR PROGRAM
});