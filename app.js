var string="riteshKumar";
    var array = string.split("");
    var timer;
    function frameloop(){
        if(array.length>0){
            document.getElementById("head").innerHTML +=array.shift();
        }else{
            clearTimeout(timer);
        }
        loopTimer = setTimeout('frameloop()',100);
    }
    frameloop();
(function($) { "use strict";
		
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//Travel portfolio page
	
	$(".projects").on('click', function () {
		$("body").addClass("projects-on");
	});
	$(".projects-close").on('click', function () {
		$("body").removeClass("projects-on");
	});

	
	//Wildlife portfolio page
	
	$(".hobbies").on('click', function () {
		$("body").addClass("hobbies-on");
	});
	$(".hobbies-close").on('click', function () {
		$("body").removeClass("hobbies-on");
	});

	
	//Nature portfolio page
	
	$(".gallery").on('click', function () {
		$("body").addClass("gallery-on");
	});
	$(".gallery-close").on('click', function () {
		$("body").removeClass("gallery-on");
	});

	
})(jQuery); 