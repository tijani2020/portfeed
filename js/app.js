const navigation = document.getElementById('navbar')
const logo = document.getElementById('logo')
const siteName = document.getElementById('sitename')
const ulLink = document.getElementById('whitelink')

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navigation.style.padding = "0.5rem 0rem";
        navigation.style.borderBottom = "2px solid #7b1fed";
        navigation.style.backgroundColor = "#fff";
        siteName.style.color = "#7b1fed";
        logo.style.fontSize = "1rem";
        ulLink.id = "blacklink";

    }

    else {
        navigation.style.padding = "1rem 0rem";
        navigation.style.borderBottom = "none";
        logo.style.fontSize = "1.5rem";
        siteName.style.color = "#fff";
        navigation.style.backgroundColor = "transparent";
        ulLink.id = "whitelink";

    }

}



const links = document.querySelectorAll(".menu ul a, .back-to-top a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}



/* for testimonials from codepen */

var galleryThumbs = new Swiper('.gallery-thumbs', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: '2',
	// coverflowEffect: {
	//   rotate: 50,
	//   stretch: 0,
	//   depth: 100,
	//   modifier: 1,
	//   slideShadows : true,
	// },
	
	coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows : false,
	  },
	  
  });
  
  
var galleryTop = new Swiper('.swiper-container.testimonial', {
	speed: 400,
	spaceBetween: 50,
	autoplay: {
	  delay: 3000,
	  disableOnInteraction: false,
	},
	direction: 'vertical',
	pagination: {
	  clickable: true,
	  el: '.swiper-pagination',
	  type: 'bullets',
	},
	thumbs: {
		swiper: galleryThumbs
	  }
  });
  
/*  for testimonials from codepen */
