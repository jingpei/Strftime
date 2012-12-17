$(document).on('ready', function() {
// THIS IS THE TOP OF YOUR PROGRAM



/* this is your way to get the text inside the text box:
$('#input').val();
*/

/* 
this is how to check if the submit button is clicked:
$('#submit').on('click', function () {
     /* insert your function to run when the submit button is clicked /*
 });
 */

$('#button').click(function() {
	var today = new Date();
	
	var event = $('#event').val();
	if($('#event').val()==""){
		event = "This event";
	}
	
	var date = $('#date').val().toString();
	var temp = new Array();
	temp = date.split("/");
	var mmIn = temp[0];
	var ddIn = temp[1];
	var yyyyIn = temp[2];
	var hourIn = $('#hour').val();
	var minIn = $('#minutes').val();
	var dateIn = new Date(yyyyIn, mmIn-1, ddIn, hourIn, minIn, 0);
	
	function calculateTime(args){
		if(today >= dateIn){
			var diff = today.getTime()-dateIn.getTime();
			diff = (diff/(1000*60*60*24)).toFixed(0);
			console.log(diff); 
			//Prints value of diff
			
			
			if(diff == 0 && today.getDay() == dateIn.getDay()){
				var hours = today.getTime()-dateIn.getTime();
				hours = (hours/(1000*60*60));
				if(hours > 0 && hours < 1){
					var min = today.getTime()-dateIn.getTime();
					min = (min/(1000*60)).toFixed(0);
					console.log(event + " happened " + min + " minutes ago.");
				}
				else if(hours >= 1 && hours < 2){
					console.log(event + " happened an hour ago.");
				}
				else{
				console.log(event + " happened today.");
				}
			}
			
			else if(diff == 1 && today.getDay() != dateIn.getDay()){
				console.log("This event happened yesterday.");
			}
			
			else if(diff >= 2 && diff < 7){
				var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
				console.log(event + " happened " + weekdays[dateIn.getDay()] + ".");
			}
			
			else if(diff >= 7 && diff < 30){
				console.log(event + " happened a few weeks ago.");
			}
			
			else if(diff >= 30 && diff < 60){
				console.log(event + " happened a month ago.");
			}
			
			else if(diff >= 60 && diff < 365){
				console.log(event + " happened a few months ago.");
			}
			
			else if(today.getYear() > dateIn.getYear()){
				console.log(event + " happened last year.");
			}
			
			else if(today.getYear()-dateIn.getYear() >= 2){
				console.log(event + " happened a few years ago.");
			}
		}
		
		else{
			alert("Please enter a past event.");
			return false;
		}
		
	};
	
	calculateTime(date);
});






// THIS IS THE BOTTOM OF YOUR PROGRAM
});