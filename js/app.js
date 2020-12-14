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



/* for testimonials from swiper */
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
   },
});


/*  for testimonials from swiper */
