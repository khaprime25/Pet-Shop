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

// Service Section
const services = {

    grooming: {
        title: "Pet Grooming",
        image: "../Images/grooming.jpg",
        description: "Our professional grooming team keeps your pets clean, healthy, and stylish using safe products and modern techniques.",
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
        description: "Comprehensive veterinary services designed to maintain your pet's health and well-being.",
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
        description: "High-quality nutrition carefully selected to support every stage of your pet's life.",
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
        description: "Safe and comfortable boarding facilities with dedicated care while you're away.",
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
        description: "Luxury spa experiences that leave your pets relaxed, refreshed, and happy.",
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
        description: "Structured programs that help pets learn, socialize, and develop positive behaviors.",
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

        const service = services[button.dataset.service];

        title.textContent = service.title;
        image.src = service.image;
        description.textContent = service.description;
        features.innerHTML = service.features.map(item => `<li>${item}</li>`).join("");
        modal.classList.add("active");
    });
});

document.querySelector(".close-btn").addEventListener("click", () => {
    modal.classList.remove("active");
});

document.querySelector(".close-modal").addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", e => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

// Shop Section
const productCards = document.querySelectorAll(".product-card");
const toggleBtn = document.getElementById("toggleProducts");

let visibleCount = 4;

showProducts();

function showProducts() {

    productCards.forEach((product, index) => {

        if (index < visibleCount) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });

}

toggleBtn.addEventListener("click", () => {

    if (visibleCount < productCards.length) {

        visibleCount += 4;

        if (visibleCount > productCards.length) {
            visibleCount = productCards.length;
        }
        showProducts();

        if (visibleCount === productCards.length) {
            toggleBtn.textContent = "Show Less";
        }

    } else {
        visibleCount = 4;
        showProducts();
        toggleBtn.textContent = "Show More";
    }

});

// Product Details
const products = {

    1: {
        title: "Tasty Bite Dog Food",
        price: "$16.00",
        image: "../Images/shop-item1.jpg",
        badge: "Best Seller",
        description: "A nutritious and delicious dog food formulated to support healthy growth, energy, and daily wellness.",
        features: [
            "Rich in Protein",
            "Balanced Nutrition",
            "Healthy Digestion",
            "Suitable for Adult Dogs"
        ]
    },

    2: {
        title: "Royal Canin",
        price: "$18.95",
        image: "../Images/shop-item2.jpg",
        badge: "Premium",
        description: "Premium-quality nutrition carefully crafted to meet the specific needs of different breeds and life stages.",
        features: [
            "Breed Specific Formula",
            "High Quality Ingredients",
            "Immune Support",
            "Healthy Coat & Skin"
        ]
    },

    3: {
        title: "Whiskas Cat Food",
        price: "$6.99",
        image: "../Images/shop-item3.jpg",
        badge: "Popular",
        description: "A tasty and balanced meal designed to keep cats active, healthy, and satisfied every day.",
        features: [
            "Essential Vitamins",
            "Quality Protein",
            "Supports Healthy Growth",
            "Great Taste Cats Love"
        ]
    },

    4: {
        title: "P Cat Meroro",
        price: "$3.99",
        image: "../Images/shop-item4.jpg",
        badge: "Value Pack",
        description: "An affordable daily meal option providing essential nutrients for your cat's overall well-being.",
        features: [
            "Budget Friendly",
            "Balanced Formula",
            "Daily Nutrition",
            "Easy to Digest"
        ]
    },

    5: {
        title: "Whiskas Chicken Flavour",
        price: "$12.50",
        image: "../Images/shop-item5.jpg",
        badge: "Customer Favorite",
        description: "Made with delicious chicken flavor to provide both enjoyment and balanced nutrition for cats.",
        features: [
            "Chicken Flavour",
            "Protein Rich",
            "Healthy Immune System",
            "Suitable for Adult Cats"
        ]
    },

    6: {
        title: "Dentley Chicken",
        price: "$9.99",
        image: "../Images/shop-item6.jpg",
        badge: "Healthy Choice",
        description: "A flavorful chicken-based pet food designed to support strong muscles and overall health.",
        features: [
            "High Protein",
            "Natural Ingredients",
            "Supports Strong Muscles",
            "Easy Feeding"
        ]
    },

    7: {
        title: "Cat Food (Salmon)",
        price: "$24.99",
        image: "../Images/shop-item7.jpg",
        badge: "Premium",
        description: "Premium salmon recipe packed with nutrients to support healthy skin, coat, and vitality.",
        features: [
            "Real Salmon",
            "Omega Fatty Acids",
            "Healthy Skin & Coat",
            "Premium Formula"
        ]
    },

    8: {
        title: "Ocean Deli (Salmon Trip)",
        price: "$8.00",
        image: "../Images/shop-item8.jpg",
        badge: "New Arrival",
        description: "A seafood-inspired recipe offering a delicious taste and balanced nutrition for pets.",
        features: [
            "Ocean Fish Blend",
            "Rich Flavor",
            "Natural Nutrition",
            "Easy Digestion"
        ]
    },

    9: {
        title: "Pet Care (Premium)",
        price: "$18.00",
        image: "../Images/shop-item9.jpg",
        badge: "Premium",
        description: "A carefully selected premium formula designed to provide complete nutrition and daily wellness.",
        features: [
            "Premium Ingredients",
            "Complete Nutrition",
            "Healthy Energy Levels",
            "Quality Assured"
        ]
    },

    10: {
        title: "Olive Paws",
        price: "$23.99",
        image: "../Images/shop-item10.jpg",
        badge: "Top Pick",
        description: "A premium pet food option crafted with quality ingredients to support overall health and happiness.",
        features: [
            "Quality Ingredients",
            "Healthy Digestion",
            "Nutrient Rich",
            "Suitable for Daily Feeding"
        ]
    }
};

const badge = document.getElementById("modal-badge");
const price = document.getElementById("modal-price");
const closeModal = document.querySelector(".close-modal");
const closeBtn = document.querySelector(".close-btn");

function openProductModal(productId) {
    const product = products[productId];

    badge.style.display = "inline-block";
    price.style.display = "block";
    badge.textContent = product.badge;
    title.textContent = product.title;
    price.textContent = product.price;
    image.src = product.image;
    image.alt = product.title;
    description.textContent = product.description;
    features.innerHTML = "";

    product.features.forEach(feature => {
        features.innerHTML += `
            <li>${feature}</li>
        `;
    });
    modal.classList.add("active");
}

document.querySelectorAll(".view-product").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        openProductModal(btn.dataset.product);
    });
});

if (window.innerWidth <= 991) {
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", () => {
            openProductModal(card.dataset.product);
        });
    });
}

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("active");
    }
});

// Review Section
const reviews = [

    {
        initials: "SJ",
        name: "Sarah Johnson",
        role: "Pet Owner",
        text: "The grooming service was exceptional! My Labrador came back looking fantastic and happier than ever. The staff were professional and incredibly caring."
    },

    {
        initials: "MB",
        name: "Michael Brown",
        role: "Cat Parent",
        text: "I left my cat for a week at the pet hotel and received daily updates. The team treated her like family and made me feel completely at ease."
    },

    {
        initials: "EW",
        name: "Emma Wilson",
        role: "Dog Owner",
        text: "The spa treatment and daycare package exceeded my expectations. My dog absolutely loved every moment and came home relaxed and happy."
    }

];

let current = 0;

const avatar = document.querySelector(".review-avatar");
const text = document.querySelector(".review-text");
const nameEl = document.querySelector(".review-name");
const role = document.querySelector(".review-role");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const card = document.querySelector(".review-card");
const dots = document.querySelectorAll(".dot");

function showReview(index) {
    card.classList.add("fade");
    setTimeout(() => {
        avatar.textContent = reviews[index].initials;
        text.textContent = reviews[index].text;
        nameEl.textContent = reviews[index].name;
        role.textContent = reviews[index].role;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
        card.classList.remove("fade");
    }, 200);
}

nextBtn.addEventListener("click", () => {

    current++;
    if (current >= reviews.length) {
        current = 0;
    };
    showReview(current);
});

prevBtn.addEventListener("click", () => {

    current--;
    if (current < 0) {
        current = reviews.length - 1;
    }
    showReview(current);
});

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        current = index;
        showReview(current);
    });

});

setInterval(() => {

    current++;
    if (current >= reviews.length) {
        current = 0;
    };
    showReview(current);
}, 6000);