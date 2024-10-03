window.onscroll = function () { toggleBackToTopButton() };

function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

let logo = document.getElementById('logo');

let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
sun.addEventListener('click', () => {
    moon.style.display = "block";
    sun.style.display = "none";
    logo.src = 'https://gssoc.girlscript.tech/GS_logo_Black.svg';
    document.getElementById("menu_path").setAttribute("fill", "#000000");
})
moon.addEventListener('click', () => {
    sun.style.display = "block";
    moon.style.display = "none";
    logo.src = 'https://gssoc.girlscript.tech/GS_logo_White.svg';
    document.getElementById("menu_path").setAttribute("fill", "#ffffff");
})

function switchCss(fileName) {
    let link = document.getElementById('stylesheet');
    link.href = fileName;
}

let menu = document.getElementById('menu');
let nav_media = document.getElementById('nav_media');

menu.addEventListener('click', () => {
    if (nav_media.style.display === "none") {
        nav_media.style.display = "flex";
    } else {
        nav_media.style.display = "none";
    }
});


