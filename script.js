const loginBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form');

loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');

});

const menuBtn = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');

});

const header = document.querySelector('.content');

window.addEventListener('scroll', () => {

    navbar.classList.remove('active');
    loginForm.classList.remove('active');

    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

});