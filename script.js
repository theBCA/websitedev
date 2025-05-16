// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = '#fff';
    }
});

// Add animation to gallery items when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(item);
});

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCDbMB-T1scrE57qnF2T0Mac-8Vw7jSssM",
    authDomain: "perde-website.firebaseapp.com",
    projectId: "perde-website",
    storageBucket: "perde-website.appspot.com",
    messagingSenderId: "908490709170",
    appId: "1:908490709170:web:7e200d3abd37204be611ab",
    databaseURL: "https://perde-website-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Load and display contact information
function loadContactInfo() {
    console.log('Starting to load contact information...');
    const contactRef = database.ref('contact');
    console.log('Database reference created:', contactRef);
    
    contactRef.once('value', (snapshot) => {
        const data = snapshot.val();
        console.log('Raw contact data from Firebase:', data);
        
        if (data) {
            console.log('Updating contact information on the page...');
            
            // Update phone
            const phoneElements = document.querySelectorAll('.contact-item:nth-child(1) p');
            console.log('Found phone elements:', phoneElements.length);
            phoneElements.forEach(el => {
                el.textContent = data.phone || '+90 555 123 4567';
                console.log('Updated phone:', el.textContent);
            });
            
            // Update WhatsApp
            const whatsappElements = document.querySelectorAll('.contact-item:nth-child(2) p');
            console.log('Found WhatsApp elements:', whatsappElements.length);
            whatsappElements.forEach(el => {
                el.textContent = data.whatsapp || '+90 555 123 4567';
                console.log('Updated WhatsApp:', el.textContent);
            });
            
            // Update Instagram
            const instagramElements = document.querySelectorAll('.contact-item:nth-child(3) p');
            console.log('Found Instagram elements:', instagramElements.length);
            instagramElements.forEach(el => {
                el.textContent = data.instagram || '@perdedunyasi';
                console.log('Updated Instagram:', el.textContent);
            });
            
            // Update address
            const addressElements = document.querySelectorAll('.contact-item:nth-child(4) p');
            console.log('Found address elements:', addressElements.length);
            addressElements.forEach(el => {
                el.textContent = data.address || 'İstanbul, Türkiye';
                console.log('Updated address:', el.textContent);
            });
            
            // Update social links
            const instagramLink = document.querySelector('.social-links a:first-child');
            if (instagramLink && data.instagram) {
                instagramLink.href = `https://instagram.com/${data.instagram.replace('@', '')}`;
                console.log('Updated Instagram link:', instagramLink.href);
            }
            
            const whatsappLink = document.querySelector('.social-links a:last-child');
            if (whatsappLink && data.whatsapp) {
                whatsappLink.href = `https://wa.me/${data.whatsapp.replace(/\D/g, '')}`;
                console.log('Updated WhatsApp link:', whatsappLink.href);
            }
            
            console.log('Contact information update complete');
        } else {
            console.log('No contact data found in Firebase');
        }
    }, (error) => {
        console.error('Error loading contact information:', error);
    });
}

// Hero background gallery logic
let heroGalleryImages = [];
let heroGalleryIndex = 0;

function setHeroBackground(index) {
    const bgDiv = document.querySelector('.hero-bg-image');
    if (heroGalleryImages.length > 0 && bgDiv) {
        bgDiv.style.backgroundImage = `url('${heroGalleryImages[index]}')`;
    }
}

function updateHeroGalleryButtons() {
    document.querySelector('.hero-swipe.left').disabled = heroGalleryImages.length <= 1;
    document.querySelector('.hero-swipe.right').disabled = heroGalleryImages.length <= 1;
}

document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...
    // Hero swipe button events
    document.querySelector('.hero-swipe.left').addEventListener('click', function(e) {
        e.stopPropagation();
        heroGalleryIndex = (heroGalleryIndex - 1 + heroGalleryImages.length) % heroGalleryImages.length;
        setHeroBackground(heroGalleryIndex);
    });
    document.querySelector('.hero-swipe.right').addEventListener('click', function(e) {
        e.stopPropagation();
        heroGalleryIndex = (heroGalleryIndex + 1) % heroGalleryImages.length;
        setHeroBackground(heroGalleryIndex);
    });
});

// Update loadProducts to also update hero gallery images
function loadProducts() {
    console.log('Starting to load products...');
    const productsRef = database.ref('products');
    
    productsRef.on('value', (snapshot) => {
        const products = snapshot.val();
        console.log('Products data from Firebase:', products);
        
        if (products) {
            const galleryGrid = document.querySelector('.gallery-grid');
            galleryGrid.innerHTML = ''; // Clear existing items
            heroGalleryImages = [];
            Object.entries(products).forEach(([id, product]) => {
                const productElement = document.createElement('div');
                productElement.className = 'gallery-item';
                productElement.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="price">₺${product.price}/m²</span>
                `;
                galleryGrid.appendChild(productElement);
                // Add animation observer
                productElement.style.opacity = '0';
                productElement.style.transform = 'translateY(20px)';
                productElement.style.transition = 'opacity 0.5s, transform 0.5s';
                observer.observe(productElement);
                // Add to hero gallery images
                heroGalleryImages.push(product.imageUrl);
            });
            // Set first hero background
            heroGalleryIndex = 0;
            setHeroBackground(heroGalleryIndex);
            updateHeroGalleryButtons();
            console.log('Products loaded and displayed');
        } else {
            console.log('No products found in Firebase');
        }
    }, (error) => {
        console.error('Error loading products:', error);
    });
}

// Load contact information when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadContactInfo();
    loadProducts();
});

// Translation data
const translations = {
    tr: {
        nav_home: "Ana Sayfa",
        nav_models: "Modeller",
        nav_about: "Hakkımızda",
        nav_contact: "İletişim",
        hero_title: "Evinize Şıklık Katın",
        hero_subtitle: "En kaliteli perdeler, en uygun fiyatlarla",
        hero_button: "Modelleri İncele",
        gallery_title: "Öne Çıkan Modeller",
        contact_title: "İletişim",
        model1_title: "Modern Stor Perde",
        model1_desc: "%100 pamuk, ışık geçirgen",
        model1_price: "₺450/m²",
        model2_title: "Zebra Perde",
        model2_desc: "Pratik kullanım, ışık kontrolü",
        model2_price: "₺600/m²",
        model3_title: "Klasik Perde",
        model3_desc: "Elegant tasarım, %100 pamuk",
        model3_price: "₺550/m²",
        model4_title: "Güneşlik",
        model4_desc: "UV korumalı, dayanıklı",
        model4_price: "₺400/m²",
        footer_text: "&copy; 2024 Perde Dünyası. Tüm hakları saklıdır."
    },
    en: {
        nav_home: "Home",
        nav_models: "Models",
        nav_about: "About Us",
        nav_contact: "Contact",
        hero_title: "Add Elegance to Your Home",
        hero_subtitle: "The best quality curtains at the best prices",
        hero_button: "View Models",
        gallery_title: "Featured Models",
        contact_title: "Contact",
        model1_title: "Modern Roller Blind",
        model1_desc: "100% cotton, light permeable",
        model1_price: "$15/m²",
        model2_title: "Zebra Blind",
        model2_desc: "Practical use, light control",
        model2_price: "$20/m²",
        model3_title: "Classic Curtain",
        model3_desc: "Elegant design, 100% cotton",
        model3_price: "$18/m²",
        model4_title: "Sunshade",
        model4_desc: "UV protected, durable",
        model4_price: "$13/m²",
        footer_text: "&copy; 2024 Perde Dünyası. All rights reserved."
    },
    de: {
        nav_home: "Startseite",
        nav_models: "Modelle",
        nav_about: "Über Uns",
        nav_contact: "Kontakt",
        hero_title: "Bringen Sie Eleganz in Ihr Zuhause",
        hero_subtitle: "Die besten Vorhänge zu den besten Preisen",
        hero_button: "Modelle ansehen",
        gallery_title: "Empfohlene Modelle",
        contact_title: "Kontakt",
        model1_title: "Moderne Rollos",
        model1_desc: "100% Baumwolle, lichtdurchlässig",
        model1_price: "15€/m²",
        model2_title: "Zebra-Rollo",
        model2_desc: "Praktisch, Lichtkontrolle",
        model2_price: "20€/m²",
        model3_title: "Klassischer Vorhang",
        model3_desc: "Elegantes Design, 100% Baumwolle",
        model3_price: "18€/m²",
        model4_title: "Sonnenschutz",
        model4_desc: "UV-geschützt, langlebig",
        model4_price: "13€/m²",
        footer_text: "&copy; 2024 Perde Dünyası. Alle Rechte vorbehalten."
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...
    // Language switcher
    document.querySelectorAll('.flag').forEach(flag => {
        flag.addEventListener('click', function() {
            setLanguage(this.getAttribute('data-lang'));
        });
    });
}); 