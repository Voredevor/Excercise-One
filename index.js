// Gallery 
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

	        	if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		    }
		    	$(this).addClass("active");
	    	});
});
/*	end gallery */

$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

//   Popup Function 
$(function () {
    "use strict";
    
    $(".popup img").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });
    
    $(".img-show-span, .overlay").click(function () {
        $(".show").fadeOut();
    });
    
});

// Contact Us Form 
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

//   Visitors Counter 
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});

// Get date and time 
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

//   Geolocation Features 
// Set global variable
    var watchID;

    function showPosition() {
        if(navigator.geolocation) {
            watchID = navigator.geolocation.watchPosition(successCallback);
        } else {
            alert("Sorry, your browser does not support HTML5 geolocation.");
        }
    }
    function successCallback(position) {
        toggleWatchBtn.innerHTML = "Stop Watching";
        
        // Check position has been changed or not before doing anything
        if(prevLat != position.coords.latitude || prevLong != position.coords.longitude) {
            
            // Set previous location
            var prevLat = position.coords.latitude;
            var prevLong = position.coords.longitude;
            
            // Get current position
            var positionInfo = "(" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
            document.getElementById("result").innerHTML = positionInfo;
            
        }
        
    }
    function startWatch() {
        var result = document.getElementById("result");
        
        var toggleWatchBtn = document.getElementById("toggleWatchBtn");
        
        // toggleWatchBtn.onclick = function() {
            if(watchID) {
                toggleWatchBtn.innerHTML = "Start Watching";
                navigator.geolocation.clearWatch(watchID);
                watchID = false;
            } else {
                toggleWatchBtn.innerHTML = "Aquiring Geo Location...";
                showPosition();
            }
        // }
    }
    startWatch();
    
    // Initialise the whole system (above)
    window.onload = startWatch;

    // Click callers
    const homeCall = document.getElementById('header-home');
    const contactCall = document.getElementById('header-contact');
    const aboutCall = document.getElementById('header-about');

    // Reactors 
    const homePage = document.getElementById('portfolio');
    const contactPage = document.getElementById('contact-us-form');
    const aboutPage = document.getElementsByClassName('about-us-page');

    homeCall.addEventListener('click',  () => {
        if (homePage.style.display == 'none') {
            homePage.style.display = 'block';
            contactPage.style.display = 'none'
            aboutPage.style.display = 'none'
        } else {
            
        }
    });
    contactCall.addEventListener('click', () => {
        if (contactPage.style.display == 'none') {
            homePage.style.display = 'none';
            contactPage.style.display = 'block'
            aboutPage.style.display = 'none'
        } else {
            
        }
    });
    aboutCall.addEventListener('click', () => {
        if (aboutPage.style.display == 'none') {
            homePage.style.display = 'none';
            contactPage.style.display = 'none'
            aboutPage.style.display = 'block'
        } else {
            
        }
    })


