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

// Load contact information when the page loads
document.addEventListener('DOMContentLoaded', loadContactInfo); 