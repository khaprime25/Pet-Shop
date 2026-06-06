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

const services = {

    grooming: {
        title: "Pet Grooming",
        image: "../Images/grooming.jpg",
        description:
            "Our professional grooming team keeps your pets clean, healthy, and stylish using safe products and modern techniques.",

        features: [
            "Bath & Dry",
            "Hair Trimming",
            "Nail Clipping",
            "Ear Cleaning"
        ]
    },

    health: {
        title: "Health Care",
        image: "../Images/health.jpg",
        description:
            "Comprehensive veterinary services designed to maintain your pet's health and well-being.",

        features: [
            "Routine Checkups",
            "Vaccinations",
            "Health Monitoring",
            "Expert Consultation"
        ]
    },

    food: {
        title: "Premium Pet Foods",
        image: "../Images/food.jpg",
        description:
            "High-quality nutrition carefully selected to support every stage of your pet's life.",

        features: [
            "Premium Brands",
            "Healthy Treats",
            "Balanced Nutrition",
            "Special Diet Options"
        ]
    },

    hotel: {
        title: "Pet Hotel",
        image: "../Images/hotel.jpg",
        description:
            "Safe and comfortable boarding facilities with dedicated care while you're away.",

        features: [
            "Private Suites",
            "24/7 Monitoring",
            "Daily Exercise",
            "Feeding Services"
        ]
    },

    spa: {
        title: "Pet Spa",
        image: "../Images/spa.jpg",
        description:
            "Luxury spa experiences that leave your pets relaxed, refreshed, and happy.",

        features: [
            "Aromatherapy",
            "Coat Treatment",
            "Massage Care",
            "Skin Hydration"
        ]
    },

    training: {
        title: "Training & Daycare",
        image: "../Images/training.jpg",
        description:
            "Structured programs that help pets learn, socialize, and develop positive behaviors.",

        features: [
            "Basic Commands",
            "Social Activities",
            "Play Sessions",
            "Professional Trainers"
        ]
    }

};

const modal = document.querySelector(".service-modal");
const buttons = document.querySelectorAll(".service-btn");

const title = document.getElementById("modal-title");
const image = document.getElementById("modal-img");
const description = document.getElementById("modal-description");
const features = document.getElementById("modal-features");

buttons.forEach(button => {

    button.addEventListener("click", e => {

        e.preventDefault();

        const service =
            services[button.dataset.service];

        title.textContent =
            service.title;

        image.src =
            service.image;

        description.textContent =
            service.description;

        features.innerHTML =
            service.features
                .map(item =>
                    `<li>${item}</li>`)
                .join("");

        modal.classList.add("active");
    });

});

document.querySelector(".close-btn")
    .addEventListener("click", () => {
        modal.classList.remove("active");
    });

document.querySelector(".close-modal")
    .addEventListener("click", () => {
        modal.classList.remove("active");
    });

modal.addEventListener("click", e => {

    if (e.target === modal) {
        modal.classList.remove("active");
    }

});