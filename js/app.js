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




// Navigate projects start 


const skillsMenu = document.getElementById('skills-menu');
const menuItem = document.getElementsByClassName('skills-menu-item');
const projects = document.getElementsByClassName('projects');


function styleSkillsMunuItem (a,b,c) {
    a.style.cssText = 'background-color: #7b1fed;border-radius: 5px;padding: 3PX 5px;border: 1.5px solid #7b1fed;color: white;';
    b.style.cssText = 'background-color: white;border-radius: 5px;padding: 3PX 5px;border: 1.5px solid #7b1fed;color: #7b1fed;';
    c.style.cssText = 'background-color: white;border-radius: 5px;padding: 3PX 5px;border: 1.5px solid #7b1fed;color: #7b1fed;';
}

function displayProjectSection (e,f,g) {
        e.style.display = 'flex';
        f.style.display = 'none';
        g.style.display = 'none';
}

skillsMenu.addEventListener('click', event => {
   
       if (event.target === menuItem[0]) {    
           
                 styleSkillsMunuItem (menuItem[0],menuItem[1],menuItem[2])
                 displayProjectSection (projects[0],projects[2],projects[1])
        }  

       else if (event.target === menuItem[1]) {  

                 styleSkillsMunuItem (menuItem[1],menuItem[0],menuItem[2])
                 displayProjectSection (projects[1],projects[0],projects[2])
        }  

       else   {
                  styleSkillsMunuItem (menuItem[2],menuItem[0],menuItem[1])
                  displayProjectSection (projects[2],projects[0],projects[1])
        }     
});

// Navigate projects start