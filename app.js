document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        } 
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var modalBanner = document.getElementById('myModalBanner');
    var btnBanner = document.getElementById("myBtnBanner");
    var spanBanner = document.getElementsByClassName("closeBanner")[0];

    btnBanner.onclick = function() {
        event.preventDefault();
        modalBanner.style.display = "block";
    }

    spanBanner.onclick = function() {
        modalBanner.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modalBanner.style.display = "none";
        }        
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById('myModalFooter');
    var btn = document.getElementById("myBtnFooter");
    var span = document.getElementsByClassName("closeFooter")[0];

    btn.onclick = function() {
        event.preventDefault();
        modal.style.display = "block";
        modal.style.zIndex = "999999999999";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        } 
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var modalConsult = document.getElementById('myModalConsult');
    var btnConsult = document.getElementById("myBtnConsult");
    var spanConsult = document.getElementsByClassName("closeConsult")[0];

    btnConsult.onclick = function() {
        event.preventDefault();
        modalConsult.style.display = "block";
    }

    spanConsult.onclick = function() {
        modalConsult.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modalConsult.style.display = "none";
        } 
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var modalConsult = document.getElementById('myModalViber');
    var btnConsult = document.getElementById("myBtnViber");
    var spanConsult = document.getElementsByClassName("closeViber")[0];

    btnConsult.onclick = function() {
        event.preventDefault();
        modalConsult.style.display = "block";
    }

    spanConsult.onclick = function() {
        modalConsult.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modalConsult.style.display = "none";
        } 
    }
});


// КАТАЛОГ
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById('myModalA1');
    var btn = document.getElementById("myBtnA1");
    var span = document.getElementsByClassName("closeA1")[0];

    btn.onclick = function() {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        } 
    }
});



// СКРОЛЛ ШАПКИ

const headerEl = document.getElementById("header");
const headerInfo = document.getElementById("header__info");
const modalConsult = document.getElementById("modalConsult");
const headerLogo = document.getElementById("header__logo");

window.addEventListener("scroll", function() {
    // Если экран меньше или равен 1000px, ничего не делаем
    if (window.innerWidth <= 1000) return;

    const scrollPos = window.scrollY;

    if (scrollPos > 10) {
        headerEl.style.boxShadow = "4px 2px 15px 2px rgba(108, 108, 108, 0.27)";
        headerInfo.style.display = "none";
        headerLogo.style.width = "200px";
    } else {
        headerInfo.style.display = "flex";
        headerLogo.style.width = "";
    }
});



// МАСКА НОМЕРА
const phoneMask = document.getElementById("phone_mask");
IMask (
    phoneMask, 
    {mask : '+{375}(00)000-00-00'}
);

const phoneMaskBanner = document.getElementById("phone_maskBanner");
IMask (
    phoneMaskBanner, 
    {mask : '+{375}(00)000-00-00'}
);

const phoneMaskOwnWork = document.getElementById("phone_maskOwnWork");
IMask (
    phoneMaskOwnWork, 
    {mask : '+{375}(00)000-00-00'}
);

const phonemaskRewiews = document.getElementById("phone_maskRewiews");
IMask (
    phonemaskRewiews, 
    {mask : '+{375}(00)000-00-00'}
);
const phonemaskRemained = document.getElementById("phone_maskRemained");
IMask (
    phonemaskRemained, 
    {mask : '+{375}(00)000-00-00'}
);
const phonemaskRemainedViber = document.getElementById("phone_maskRemainedViber");
IMask (
    phonemaskRemainedViber, 
    {mask : '+{375}(00)000-00-00'}
);
const phonemaskFooter = document.getElementById("phone_maskFooter");
IMask (
    phonemaskFooter, 
    {mask : '+{375}(00)000-00-00'}
);

// бургер меню
// document.querySelector('.burger_menu').addEventListener('click', function() {
//             this.classList.toggle('active');
//             document.querySelector('.nav').classList.toggle('open');
//         })