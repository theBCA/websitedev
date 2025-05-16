const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'perde-website.firebasestorage.app',
  databaseURL: 'https://perde-website-default-rtdb.europe-west1.firebasedatabase.app'
});

const bucket = admin.storage().bucket();
const db = admin.database();

const imagesDir = path.join(__dirname, 'new-products');
const files = fs.readdirSync(imagesDir);

const defaultProducts = [
  { name: 'Dış Mekan Perde', category: 'guneslik', price: 500, description: 'Dış mekan için dayanıklı perde.' },
  { name: 'Ofis Perdesi', category: 'stor', price: 350, description: 'Modern ofisler için stor perde.' },
  { name: 'Apartman Perdesi', category: 'guneslik', price: 400, description: 'Apartmanlar için güneşlik perde.' },
  { name: 'Villa Perdesi', category: 'guneslik', price: 600, description: 'Villalar için özel perde.' },
  { name: 'Restoran Perdesi', category: 'klasik', price: 450, description: 'Restoranlar için şık perde.' },
  { name: 'Balkon Perdesi', category: 'stor', price: 300, description: 'Balkonlar için uygun perde.' },
  { name: 'Bahçe Perdesi', category: 'guneslik', price: 550, description: 'Bahçeler için dış mekan perde.' },
  { name: 'Teras Perdesi', category: 'guneslik', price: 500, description: 'Teraslar için dayanıklı perde.' },
  { name: 'Kafe Perdesi', category: 'klasik', price: 400, description: 'Kafeler için klasik perde.' },
  { name: 'Kış Bahçesi Perdesi', category: 'stor', price: 350, description: 'Kış bahçeleri için stor perde.' }
];

async function uploadAndAddProducts() {
  for (let i = 0; i < files.length; i++) {
    const filePath = path.join(imagesDir, files[i]);
    const product = defaultProducts[i % defaultProducts.length];
    const storageFileName = `products/${Date.now()}_${files[i]}`;
    const contentType = mime.lookup(filePath) || 'image/jpeg';

    try {
      // Upload to Firebase Storage
      await bucket.upload(filePath, {
        destination: storageFileName,
        metadata: { contentType }
      });

      // Get public URL
      const file = bucket.file(storageFileName);
      const [url] = await file.getSignedUrl({
        action: 'read',
        expires: '03-01-2030'
      });

      // Add to Realtime Database
      await db.ref('products').push({
        ...product,
        imageUrl: url,
        createdAt: admin.database.ServerValue.TIMESTAMP
      });

      console.log(`Successfully uploaded and added product: ${product.name}`);
    } catch (error) {
      console.error(`Error processing ${files[i]}:`, error.message);
    }
  }
  console.log('All products processed!');
}

uploadAndAddProducts().catch(console.error); 