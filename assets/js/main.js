(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span style='color: white;font-size: 40px;'><</span>","<span style='color: white;font-size: 40px;'>></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

	};
	carousel();

})(jQuery);


$(document).ready(function() {
	var innerCarousel = $('.product-image-slider.owl-carousel');
	innerCarousel.owlCarousel({
		loop: true,
		center: true,
		items: 1,
		nav: false,
		dots: true,
	});
	innerCarousel.on('mousedown.owl.core', function(event) {
event.preventDefault()
event.stopPropagation()

	});

});











// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

document.addEventListener("click", (e) => {
  const elem = e.target;
  if (elem.id==="myImg") {
	style = elem.currentStyle || window.getComputedStyle(elem, false),
	bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");

    modal.style.display = "block";
    // modalImg.src = elem.dataset.biggerSrc || elem.src;
    modalImg.src = bi;
    captionText.innerHTML = elem.getAttribute('textdetail'); 
  }
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
modal.onclick = function() { 
  modal.style.display = "none";
}

$(document).keyup(function(e) {
    if (e.keyCode == 27) { // Esc
		modal.style.display = "none";
    }
});