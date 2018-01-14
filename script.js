$(document).ready(() => {
	$("#about_me_section").click(() => {
		$('html, body').animate({
        	scrollTop: $(".about_me").offset().top
    	}, 2000);
	})
	$("#projects_section").click(() => {
		$('html, body').animate({
        	scrollTop: $(".projects").offset().top
    	}, 2000);
	})
	$("#awards_section").click(() => {
		$('html, body').animate({
        	scrollTop: $(".awards").offset().top
    	}, 2000);
	})
	$("#contact_section").click(() => {
		$('html, body').animate({
        	scrollTop: $(".contact").offset().top
    	}, 2000);
	})
});