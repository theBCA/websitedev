// Dashboard JavaScript with Multi-language Support
let currentLanguage = 'tr';
const translations = {
    tr: {
        'Giriş Yap': 'Giriş Yap',
        'Login': 'Giriş Yap',
        'Anmelden': 'Giriş Yap',
        'E-posta': 'E-posta',
        'Email': 'E-posta',
        'E-Mail': 'E-posta',
        'Şifre': 'Şifre',
        'Password': 'Şifre',
        'Passwort': 'Şifre',
        'Yönetim Paneli': 'Yönetim Paneli',
        'Management Panel': 'Yönetim Paneli',
        'Verwaltungspanel': 'Yönetim Paneli',
        'Hoş geldiniz': 'Hoş geldiniz',
        'Welcome': 'Hoş geldiniz',
        'Willkommen': 'Hoş geldiniz',
        'Çıkış Yap': 'Çıkış Yap',
        'Logout': 'Çıkış Yap',
        'Abmelden': 'Çıkış Yap',
        'Anasayfa': 'Anasayfa',
        'Home': 'Anasayfa',
        'Startseite': 'Anasayfa',
        'Hakkımızda': 'Hakkımızda',
        'About Us': 'Hakkımızda',
        'Über uns': 'Hakkımızda',
        'Ürünler': 'Ürünler',
        'Products': 'Ürünler',
        'Produkte': 'Ürünler',
        'Referanslar': 'Referanslar',
        'References': 'Referanslar',
        'Referenzen': 'Referanslar',
        'Markalarımız': 'Markalarımız',
        'Our Brands': 'Markalarımız',
        'Unsere Marken': 'Markalarımız',
        'Sosyal Sorumluluk': 'Sosyal Sorumluluk',
        'Social Responsibility': 'Sosyal Sorumluluk',
        'Soziale Verantwortung': 'Sosyal Sorumluluk',
        'İletişim': 'İletişim',
        'Contact': 'İletişim',
        'Kontakt': 'İletişim',
        'Güncelle': 'Güncelle',
        'Update': 'Güncelle',
        'Aktualisieren': 'Güncelle',
        'Ürün Ekle': 'Ürün Ekle',
        'Add Product': 'Ürün Ekle',
        'Produkt hinzufügen': 'Ürün Ekle',
        'Referans Ekle': 'Referans Ekle',
        'Add Reference': 'Referans Ekle',
        'Referenz hinzufügen': 'Referans Ekle',
        'Marka Ekle': 'Marka Ekle',
        'Add Brand': 'Marka Ekle',
        'Marke hinzufügen': 'Marka Ekle',
        'Bilgileri Güncelle': 'Bilgileri Güncelle',
        'Update Information': 'Bilgileri Güncelle',
        'Informationen aktualisieren': 'Bilgileri Güncelle'
    },
    en: {
        'Giriş Yap': 'Login',
        'Login': 'Login',
        'Anmelden': 'Login',
        'E-posta': 'Email',
        'Email': 'Email',
        'E-Mail': 'Email',
        'Şifre': 'Password',
        'Password': 'Password',
        'Passwort': 'Password',
        'Yönetim Paneli': 'Management Panel',
        'Management Panel': 'Management Panel',
        'Verwaltungspanel': 'Management Panel',
        'Hoş geldiniz': 'Welcome',
        'Welcome': 'Welcome',
        'Willkommen': 'Welcome',
        'Çıkış Yap': 'Logout',
        'Logout': 'Logout',
        'Abmelden': 'Logout',
        'Anasayfa': 'Home',
        'Home': 'Home',
        'Startseite': 'Home',
        'Hakkımızda': 'About Us',
        'About Us': 'About Us',
        'Über uns': 'About Us',
        'Ürünler': 'Products',
        'Products': 'Products',
        'Produkte': 'Products',
        'Referanslar': 'References',
        'References': 'References',
        'Referenzen': 'References',
        'Markalarımız': 'Our Brands',
        'Our Brands': 'Our Brands',
        'Unsere Marken': 'Our Brands',
        'Sosyal Sorumluluk': 'Social Responsibility',
        'Social Responsibility': 'Social Responsibility',
        'Soziale Verantwortung': 'Social Responsibility',
        'İletişim': 'Contact',
        'Contact': 'Contact',
        'Kontakt': 'Contact',
        'Güncelle': 'Update',
        'Update': 'Update',
        'Aktualisieren': 'Update',
        'Ürün Ekle': 'Add Product',
        'Add Product': 'Add Product',
        'Produkt hinzufügen': 'Add Product',
        'Referans Ekle': 'Add Reference',
        'Add Reference': 'Add Reference',
        'Referenz hinzufügen': 'Add Reference',
        'Marka Ekle': 'Add Brand',
        'Add Brand': 'Add Brand',
        'Marke hinzufügen': 'Add Brand',
        'Bilgileri Güncelle': 'Update Information',
        'Update Information': 'Update Information',
        'Informationen aktualisieren': 'Update Information'
    },
    de: {
        'Giriş Yap': 'Anmelden',
        'Login': 'Anmelden',
        'Anmelden': 'Anmelden',
        'E-posta': 'E-Mail',
        'Email': 'E-Mail',
        'E-Mail': 'E-Mail',
        'Şifre': 'Passwort',
        'Password': 'Passwort',
        'Passwort': 'Passwort',
        'Yönetim Paneli': 'Verwaltungspanel',
        'Management Panel': 'Verwaltungspanel',
        'Verwaltungspanel': 'Verwaltungspanel',
        'Hoş geldiniz': 'Willkommen',
        'Welcome': 'Willkommen',
        'Willkommen': 'Willkommen',
        'Çıkış Yap': 'Abmelden',
        'Logout': 'Abmelden',
        'Abmelden': 'Abmelden',
        'Anasayfa': 'Startseite',
        'Home': 'Startseite',
        'Startseite': 'Startseite',
        'Hakkımızda': 'Über uns',
        'About Us': 'Über uns',
        'Über uns': 'Über uns',
        'Ürünler': 'Produkte',
        'Products': 'Produkte',
        'Produkte': 'Produkte',
        'Referanslar': 'Referenzen',
        'References': 'Referenzen',
        'Referenzen': 'Referenzen',
        'Markalarımız': 'Unsere Marken',
        'Our Brands': 'Unsere Marken',
        'Unsere Marken': 'Unsere Marken',
        'Sosyal Sorumluluk': 'Soziale Verantwortung',
        'Social Responsibility': 'Soziale Verantwortung',
        'Soziale Verantwortung': 'Soziale Verantwortung',
        'İletişim': 'Kontakt',
        'Contact': 'Kontakt',
        'Kontakt': 'Kontakt',
        'Güncelle': 'Aktualisieren',
        'Update': 'Aktualisieren',
        'Aktualisieren': 'Aktualisieren',
        'Ürün Ekle': 'Produkt hinzufügen',
        'Add Product': 'Produkt hinzufügen',
        'Produkt hinzufügen': 'Produkt hinzufügen',
        'Referans Ekle': 'Referenz hinzufügen',
        'Add Reference': 'Referenz hinzufügen',
        'Referenz hinzufügen': 'Referenz hinzufügen',
        'Marka Ekle': 'Marke hinzufügen',
        'Add Brand': 'Marke hinzufügen',
        'Marke hinzufügen': 'Marke hinzufügen',
        'Bilgileri Güncelle': 'Informationen aktualisieren',
        'Update Information': 'Informationen aktualisieren',
        'Informationen aktualisieren': 'Informationen aktualisieren'
    }
};

// Language switching function
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    if (langBtns.length > 0) {
        langBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });
    }
    
    // Update all translatable elements
    document.querySelectorAll('[data-tr]').forEach(element => {
        const originalText = element.textContent;
        const translation = translations[lang][originalText] || originalText;
        element.textContent = translation;
    });
    
    // Update select options
    document.querySelectorAll('select option[data-tr]').forEach(option => {
        const originalText = option.textContent;
        const translation = translations[lang][originalText] || originalText;
        option.textContent = translation;
    });
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if Firebase is available
    if (typeof firebase === 'undefined') {
        console.error('Firebase is not loaded. Please check your Firebase configuration.');
        showMessage('Firebase yüklenemedi. Lütfen Firebase yapılandırmanızı kontrol edin.', 'error');
        return;
    }

    // DOM Elements
    const loginContainer = document.getElementById('login-container');
    const dashboardContainer = document.getElementById('dashboard-container');
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.querySelector('.logout-btn');
    const userEmail = document.getElementById('user-email');

    // Navigation
    const navLinks = document.querySelectorAll('.sidebar nav a');
    const sections = document.querySelectorAll('.section');

    // Language switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    if (langBtns.length > 0) {
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                switchLanguage(btn.dataset.lang);
            });
        });
    }

    // Navigation functionality
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links and sections
                navLinks.forEach(l => l.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Show corresponding section
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });
    }

    // Firebase Authentication
    auth.onAuthStateChanged((user) => {
        if (user) {
            if (loginContainer) loginContainer.style.display = 'none';
            if (dashboardContainer) dashboardContainer.style.display = 'flex';
            if (userEmail) userEmail.textContent = `Hoş geldiniz, ${user.email}`;
            loadDashboardData();
        } else {
            if (loginContainer) loginContainer.style.display = 'flex';
            if (dashboardContainer) dashboardContainer.style.display = 'none';
        }
    });

    // Login form
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            try {
                await auth.signInWithEmailAndPassword(email, password);
                showMessage('Giriş başarılı!', 'success');
            } catch (error) {
                showMessage('Giriş başarısız: ' + error.message, 'error');
            }
        });
    }

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            auth.signOut();
            showMessage('Çıkış yapıldı', 'success');
        });
    }

    // Image preview functionality
    function setupImagePreview(inputId, previewId) {
        const input = document.querySelector(`input[name="${inputId}"]`);
        const preview = document.getElementById(previewId);
        
        if (input && preview) {
            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    }

    // Setup all image previews
    setupImagePreview('hero-image', 'hero-image-preview');
    setupImagePreview('image', 'image-preview');
    setupImagePreview('image', 'referans-image-preview');
    setupImagePreview('image', 'markalar-image-preview');
    setupImagePreview('background-image', 'sosyal-image-preview');

    // Form submissions - only add listeners if forms exist
    const anasayfaForm = document.getElementById('anasayfa-form');
    const hakkimizdaForm = document.getElementById('hakkimizda-form');
    const urunForm = document.getElementById('urun-form');
    const referansForm = document.getElementById('referans-form');
    const markalarForm = document.getElementById('markalar-form');
    const sosyalForm = document.getElementById('sosyal-form');
    const iletisimForm = document.getElementById('iletisim-form');

    if (anasayfaForm) anasayfaForm.addEventListener('submit', handleAnasayfaSubmit);
    if (hakkimizdaForm) hakkimizdaForm.addEventListener('submit', handleHakkimizdaSubmit);
    if (urunForm) urunForm.addEventListener('submit', handleUrunSubmit);
    if (referansForm) referansForm.addEventListener('submit', handleReferansSubmit);
    if (markalarForm) markalarForm.addEventListener('submit', handleMarkalarSubmit);
    if (sosyalForm) sosyalForm.addEventListener('submit', handleSosyalSubmit);
    if (iletisimForm) iletisimForm.addEventListener('submit', handleIletisimSubmit);
});

// Form handlers
async function handleAnasayfaSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
        const data = {
            title: formData.get('title'),
            subtitle: formData.get('subtitle')
        };
        
        // Handle hero image upload if provided
        const heroImage = formData.get('hero-image');
        if (heroImage && heroImage.size > 0) {
            const imageUrl = await uploadImage(heroImage, 'hero');
            data.heroImage = imageUrl;
        }
        
        await database.ref('anasayfa').set(data);
        showMessage('Anasayfa güncellendi!', 'success');
    } catch (error) {
        showMessage('Hata: ' + error.message, 'error');
    }
}

async function handleHakkimizdaSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
        const data = {
            profileTitle: formData.get('profile-title'),
            profileContent: formData.get('profile-content'),
            mission: formData.get('mission'),
            vision: formData.get('vision')
        };
        
        await database.ref('hakkimizda').set(data);
        showMessage('Hakkımızda güncellendi!', 'success');
    } catch (error) {
        showMessage('Hata: ' + error.message, 'error');
    }
}

async function handleUrunSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
        const imageFile = formData.get('image');
        const imageUrl = await uploadImage(imageFile, 'products');
        
        const productData = {
            name: formData.get('name'),
            category: formData.get('category'),
            description: formData.get('description'),
            imageUrl: imageUrl,
            createdAt: Date.now()
        };
        
        await database.ref('urunler').push(productData);
        e.target.reset();
        const imagePreview = document.getElementById('image-preview');
        if (imagePreview) imagePreview.innerHTML = '';
        showMessage('Ürün eklendi!', 'success');
        loadProducts();
    } catch (error) {
        showMessage('Hata: ' + error.message, 'error');
    }
}

async function handleReferansSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
        let imageUrl = '';
        const imageFile = formData.get('image');
        if (imageFile && imageFile.size > 0) {
            imageUrl = await uploadImage(imageFile, 'references');
        }
        
        const referenceData = {
            name: formData.get('name'),
            status: formData.get('status'),
            description: formData.get('description'),
            imageUrl: imageUrl,
            createdAt: Date.now()
        };
        
        await database.ref('referanslar').push(referenceData);
        e.target.reset();
        const imagePreview = document.getElementById('referans-image-preview');
        if (imagePreview) imagePreview.innerHTML = '';
        showMessage('Referans eklendi!', 'success');
        loadReferences();
    } catch (error) {
        showMessage('Hata: ' + error.message, 'error');
    }
}

async function handleMarkalarSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
        let imageUrl = '';
        const imageFile = formData.get('image');
        if (imageFile && imageFile.size > 0) {
            imageUrl = await uploadImage(imageFile, 'brands');
        }
        
        const brandData = {
            name: formData.get('name'),
            description: formData.get('description'),
            imageUrl: imageUrl,
            createdAt: Date.now()
        };
        
        await database.ref('markalar').push(brandData);
        e.target.reset();
        const imagePreview = document.getElementById('markalar-image-preview');
        if (imagePreview) imagePreview.innerHTML = '';
        showMessage('Marka eklendi!', 'success');
        loadBrands();
    } catch (error) {
        showMessage('Hata: ' + error.message, 'error');
    }
}

async function handleSosyalSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
        const data = {
            title: formData.get('title'),
            content: formData.get('content')
        };
        
        // Handle background image upload if provided
        const backgroundImage = formData.get('background-image');
        if (backgroundImage && backgroundImage.size > 0) {
            const imageUrl = await uploadImage(backgroundImage, 'social');
            data.backgroundImage = imageUrl;
        }
        
        await database.ref('sosyal').set(data);
        showMessage('Sosyal sorumluluk güncellendi!', 'success');
    } catch (error) {
        showMessage('Hata: ' + error.message, 'error');
    }
}

async function handleIletisimSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
        const data = {
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address')
        };
        
        await database.ref('iletisim').set(data);
        showMessage('İletişim bilgileri güncellendi!', 'success');
    } catch (error) {
        showMessage('Hata: ' + error.message, 'error');
    }
}

// Image upload function
async function uploadImage(file, folder) {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(`${folder}/${Date.now()}_${file.name}`);
    const snapshot = await fileRef.put(file);
    return await snapshot.ref.getDownloadURL();
}

// Load dashboard data
async function loadDashboardData() {
    await Promise.all([
        loadProducts(),
        loadReferences(),
        loadBrands()
    ]);
}

// Load products
async function loadProducts() {
    try {
        const snapshot = await database.ref('urunler').once('value');
        const products = snapshot.val();
        const container = document.getElementById('products-container');
        
        if (!container) return;
        
        if (products) {
            container.innerHTML = Object.keys(products).map(key => {
                const product = products[key];
                return `
                    <div class="product-item">
                        <img src="${product.imageUrl}" alt="${product.name}">
                        <div class="product-info">
                            <h4>${product.name}</h4>
                            <p>${product.description}</p>
                            <p><strong>Kategori:</strong> ${product.category}</p>
                        </div>
                        <button class="delete-btn" onclick="deleteProduct('${key}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
            }).join('');
        } else {
            container.innerHTML = '<p>Henüz ürün eklenmemiş.</p>';
        }
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Load references
async function loadReferences() {
    try {
        const snapshot = await database.ref('referanslar').once('value');
        const references = snapshot.val();
        const container = document.getElementById('references-container');
        
        if (!container) return;
        
        if (references) {
            container.innerHTML = Object.keys(references).map(key => {
                const reference = references[key];
                return `
                    <div class="reference-item">
                        ${reference.imageUrl ? `<img src="${reference.imageUrl}" alt="${reference.name}">` : ''}
                        <div class="reference-info">
                            <h4>${reference.name}</h4>
                            <p>${reference.description}</p>
                            <p><strong>Durum:</strong> ${reference.status}</p>
                        </div>
                        <button class="delete-btn" onclick="deleteReference('${key}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
            }).join('');
        } else {
            container.innerHTML = '<p>Henüz referans eklenmemiş.</p>';
        }
    } catch (error) {
        console.error('Error loading references:', error);
    }
}

// Load brands
async function loadBrands() {
    try {
        const snapshot = await database.ref('markalar').once('value');
        const brands = snapshot.val();
        const container = document.getElementById('brands-container');
        
        if (!container) return;
        
        if (brands) {
            container.innerHTML = Object.keys(brands).map(key => {
                const brand = brands[key];
                return `
                    <div class="brand-item">
                        <img src="${brand.imageUrl}" alt="${brand.name}">
                        <div class="brand-info">
                            <h4>${brand.name}</h4>
                            <p>${brand.description}</p>
                        </div>
                        <button class="delete-btn" onclick="deleteBrand('${key}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
            }).join('');
        } else {
            container.innerHTML = '<p>Henüz marka eklenmemiş.</p>';
        }
    } catch (error) {
        console.error('Error loading brands:', error);
    }
}

// Delete functions
async function deleteProduct(key) {
    if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
        try {
            await database.ref(`urunler/${key}`).remove();
            showMessage('Ürün silindi!', 'success');
            loadProducts();
        } catch (error) {
            showMessage('Hata: ' + error.message, 'error');
        }
    }
}

async function deleteReference(key) {
    if (confirm('Bu referansı silmek istediğinizden emin misiniz?')) {
        try {
            await database.ref(`referanslar/${key}`).remove();
            showMessage('Referans silindi!', 'success');
            loadReferences();
        } catch (error) {
            showMessage('Hata: ' + error.message, 'error');
        }
    }
}

async function deleteBrand(key) {
    if (confirm('Bu markayı silmek istediğinizden emin misiniz?')) {
        try {
            await database.ref(`markalar/${key}`).remove();
            showMessage('Marka silindi!', 'success');
            loadBrands();
        } catch (error) {
            showMessage('Hata: ' + error.message, 'error');
        }
    }
}

// Utility functions
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        ${type === 'success' ? 'background-color: #4CAF50;' : 'background-color: #f44336;'}
    `;
    
    document.body.appendChild(messageDiv);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Add CSS for message animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style); 