function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}


function closeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.remove('active');
}


const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
mobileMenuToggle.addEventListener('click', toggleMobileMenu);


const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
});


function submitForm(event) {
    event.preventDefault();


    const form = event.target;
    form.reset();
}
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', submitForm);