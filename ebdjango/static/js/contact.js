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

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('name'),
    contactEmail = document.getElementById('email'),
    contactSubject = document.getElementById('subject'),
    contactMessage = document.getElementById('message')

const sendMail = (e) => {
    e.preventDefault();
    if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Please fill all input fields!',
        })
    } else {
        emailjs.sendForm('service_z3hfmgf', 'template_6wgf1uh', '#contact-form', 'Rkhi0FgahC7J_BWyB').then(() => {
            contactForm.reset();
            window.location.href = '/thanks';
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An error occurred while sending your message.',
            });
        });
    }
};

contactForm.addEventListener('submit', sendMail)