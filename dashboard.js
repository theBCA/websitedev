document.addEventListener('DOMContentLoaded', function() {
    // Authentication state observer
    auth.onAuthStateChanged(user => {
        if (user) {
            // User is signed in
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('dashboard-container').style.display = 'flex';
            document.getElementById('user-email').textContent = user.email;
            loadProducts();
            loadContactInfo();
        } else {
            // User is signed out
            document.getElementById('login-container').style.display = 'flex';
            document.getElementById('dashboard-container').style.display = 'none';
        }
    });

    // Login form handler
    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            console.log('Attempting to sign in with:', email);
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            console.log('Sign in successful:', userCredential.user);
        } catch (error) {
            console.error('Login error:', error);
            alert('Giriş başarısız: ' + error.message);
        }
    });

    // Logout handler
    document.querySelector('.logout-btn').addEventListener('click', () => {
        auth.signOut();
    });

    // Product form handler
    document.getElementById('urun-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const imageFile = formData.get('image');

        try {
            // Upload image to Firebase Storage
            const storageRef = storage.ref();
            const imageRef = storageRef.child(`products/${Date.now()}_${imageFile.name}`);
            await imageRef.put(imageFile);
            const imageUrl = await imageRef.getDownloadURL();

            // Save product data to Realtime Database
            const productRef = database.ref('products').push();
            await productRef.set({
                name: formData.get('name'),
                category: formData.get('category'),
                price: formData.get('price'),
                description: formData.get('description'),
                imageUrl: imageUrl,
                createdAt: firebase.database.ServerValue.TIMESTAMP
            });

            alert('Ürün başarıyla eklendi!');
            e.target.reset();
            document.getElementById('image-preview').innerHTML = '';
        } catch (error) {
            alert('Hata: ' + error.message);
        }
    });

    // Contact form handler
    document.getElementById('iletisim-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        // Log the form data
        console.log('Form data:', {
            phone: formData.get('phone'),
            whatsapp: formData.get('whatsapp'),
            instagram: formData.get('instagram'),
            address: formData.get('address')
        });

        try {
            const contactData = {
                phone: formData.get('phone'),
                whatsapp: formData.get('whatsapp'),
                instagram: formData.get('instagram'),
                address: formData.get('address'),
                updatedAt: firebase.database.ServerValue.TIMESTAMP
            };
            
            console.log('Saving to Firebase:', contactData);
            await database.ref('contact').set(contactData);
            console.log('Contact information saved successfully');

            alert('İletişim bilgileri başarıyla güncellendi!');
        } catch (error) {
            console.error('Error saving contact information:', error);
            alert('Hata: ' + error.message);
        }
    });

    // Load products from Realtime Database
    function loadProducts() {
        const productsContainer = document.getElementById('products-container');
        productsContainer.innerHTML = '';

        database.ref('products').orderByChild('createdAt').on('value', (snapshot) => {
            productsContainer.innerHTML = '';
            snapshot.forEach((childSnapshot) => {
                const product = childSnapshot.val();
                const productCard = createProductCard(childSnapshot.key, product);
                productsContainer.appendChild(productCard);
            });
        });
    }

    // Create product card element
    function createProductCard(id, product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <div class="content">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <p class="price">₺${product.price}/m²</p>
                <div class="actions">
                    <button class="edit-btn" onclick="editProduct('${id}')">Düzenle</button>
                    <button class="delete-btn" onclick="deleteProduct('${id}')">Sil</button>
                </div>
            </div>
        `;
        return card;
    }

    // Delete product
    async function deleteProduct(id) {
        if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
            try {
                // Get the product to delete its image
                const productRef = database.ref(`products/${id}`);
                const snapshot = await productRef.once('value');
                const product = snapshot.val();

                // Delete the image from Storage
                if (product.imageUrl) {
                    const imageRef = storage.refFromURL(product.imageUrl);
                    await imageRef.delete();
                }

                // Delete the product from Database
                await productRef.remove();
            } catch (error) {
                alert('Hata: ' + error.message);
            }
        }
    }

    // Load contact information
    function loadContactInfo() {
        console.log('Loading contact information...');
        database.ref('contact').once('value', (snapshot) => {
            const data = snapshot.val();
            console.log('Loaded contact data:', data);
            if (data) {
                document.querySelector('input[name="phone"]').value = data.phone || '';
                document.querySelector('input[name="whatsapp"]').value = data.whatsapp || '';
                document.querySelector('input[name="instagram"]').value = data.instagram || '';
                document.querySelector('textarea[name="address"]').value = data.address || '';
            }
        });
    }

    // Image preview
    document.querySelector('input[name="image"]').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const preview = document.getElementById('image-preview');
                preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            };
            reader.readAsDataURL(file);
        }
    });

    // Navigation highlighting
    document.querySelectorAll('.sidebar nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.sidebar nav a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}); 