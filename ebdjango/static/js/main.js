document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav li a");

    let activeNavItem = null;
    navItems.forEach(item => {
        if (window.location.pathname.startsWith(item.getAttribute("href"))) {
            activeNavItem = item;
        }
    });

    if (activeNavItem) {
        activeNavItem.classList.add("active");
    }

    navItems.forEach(item => {
        item.addEventListener("click", function (event) {
            navItems.forEach(navItem => {
                navItem.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});


const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
}



var typed = new Typed(".typing", {
    strings: ['Computer Engineer..', 'Data Scientist..', 'AI Engineer..'],
    typeSpeed: 100,
    BackSpeed: 600,
    loop: true
})

