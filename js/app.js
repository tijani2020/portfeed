
/*  for animation on scroll from AOS */

 AOS.init();

/* ====== sticky navbar on scroll ======== */

const navigation = document.getElementById('navbar')
const logo = document.getElementById('logo')
const siteName = document.getElementById('sitename')
const ulLink = document.getElementById('whitelink')

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navigation.style.padding = "0.5rem 0rem";
        navigation.style.boxShadow = "0 2px 2px -2px rgba(0,0,0,.2)";
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

/* ====== sticky navbar on scroll ======== */


/* ====== for testimonials from swiper ======== */

var mySwiper = new Swiper('.swiper-container', {
  // autoplay
  autoplay: {
    delay: 5000,
  },

   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },

});


/* ======= for testimonials from swiper ======= */




/*   =========== start counters ================ */

/* source https://codepen.io/bradtraversy/pen/poJwqOK */


const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

/*   ================== end counters ============= */
