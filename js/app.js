const navigation = document.getElementById('navbar')
const logo = document.getElementById('logo')
const siteName = document.getElementById('sitename')
const ulLink = document.getElementById('whitelink')

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navigation.style.padding = "0.5rem 0rem";
        navigation.style.backgroundColor = "#fff";
        siteName.style.color = "black";
        logo.style.fontSize = "1rem";
        ulLink.id = "blacklink";

    }

    else {
        navigation.style.padding = "1rem 0rem";
        logo.style.fontSize = "1.5rem";
        siteName.style.color = "#fff";
        navigation.style.backgroundColor = "transparent";
        ulLink.id = "whitelink";

    }

}