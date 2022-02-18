$(document).ready(function(){
	$("#login").click(function(event){
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		$("#contact-right").html("Thank You for contact!" + "<br>" + name + "<br>" + email + "<br>");		
	});

	/*animation*/
	$("p, h1, h2, h3, h4, a, img, form, button").hide().fadeIn(2000);
});