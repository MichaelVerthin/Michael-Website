window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var english = document.getElementById('en_click'),
    hebraw = document.getElementById('he_click'),
    russian = document.getElementById('ru_click'),
    en_txt = document.querySelectorAll('#en'),
    he_txt = document.querySelectorAll('#he'),
    ru_txt = document.querySelectorAll('#ru'),
    nb_en = en_txt.length,
    nb_he = he_txt.length,
    nb_ru = ru_txt.length,
    light = document.getElementById('lightmode'),
    dark = document.getElementById('darkmode');

light.addEventListener('click', function(){
    bgcolor(light,dark);
}, false);
dark.addEventListener('click', function(){
    bgcolor(dark,light);
}, false);
    
function bgcolor(colorOff, colorOn){
    if(colorOn.classList.contains('current_clr_light')){
        colorOn.classList.toggle('current_clr_light');
        colorOff.classList.toggle('current_clr_dark');
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else if(colorOn.classList.contains('current_clr_dark')){
        colorOn.classList.toggle('current_clr_dark');
        colorOff.classList.toggle('current_clr_light');
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

english.addEventListener('click', function() {
    langue(english,hebraw,russian);
}, false);

hebraw.addEventListener('click', function() {
    langue(hebraw,english,russian);
}, false);

russian.addEventListener('click', function() {
    langue(russian,hebraw,english);
}, false);

function langue(langue1,langue2,langue3){
    if (langue2.classList.contains('current_lang')) {
        langue1.classList.toggle('current_lang');
        langue2.classList.toggle('current_lang');
    }
    if (langue3.classList.contains('current_lang')) {
        langue1.classList.toggle('current_lang');
        langue3.classList.toggle('current_lang');
    }
    if(langue1.innerHTML == 'en'){
        afficher(en_txt, nb_en);
        cacher(he_txt, nb_he);
        cacher(ru_txt, nb_ru);
    }
    else if(langue1.innerHTML == 'he'){
        afficher(he_txt, nb_he);
        cacher(en_txt, nb_en);
        cacher(ru_txt, nb_ru);
    }
    else if(langue1.innerHTML == 'ru'){
        afficher(ru_txt, nb_ru);
        cacher(en_txt, nb_en);
        cacher(he_txt, nb_he);
    }
}
function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(english,hebraw,russian);
    bgcolor(dark,light);
}
init();
