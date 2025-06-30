# Perde Dünyası Website

Modern, responsive website for Perde Dünyası - a curtain and blinds company based in Istanbul, Turkey.

## Features

- 🌐 Multi-language support (Turkish, English, German)
- 📱 Fully responsive design
- 🔥 Firebase integration for dynamic content
- 🎨 Modern UI with smooth animations
- 📞 Contact information management
- 🖼️ Product gallery with dynamic loading

## Tech Stack

- HTML5, CSS3, JavaScript (ES6+)
- Firebase Hosting & Realtime Database
- Font Awesome icons
- Google Fonts (Poppins)

## Deployment

This website is configured for deployment on Firebase Hosting with automatic CI/CD via GitHub Actions.

### Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm start

# Deploy to Firebase
npm run deploy
```

### Production Deployment

The website automatically deploys to Firebase Hosting when changes are pushed to the `main` branch.

## Project Structure

```
├── index.html          # Main website page
├── styles.css          # Main stylesheet
├── script.js           # Main JavaScript functionality
├── firebase-config.js  # Firebase configuration
├── firebase.json       # Firebase hosting configuration
├── images/             # Product and logo images
├── dashboard.html      # Admin dashboard (separate)
├── dashboard.css       # Dashboard styles
├── dashboard.js        # Dashboard functionality
└── uploadProducts.js   # Product upload utility
```

## Environment Setup

1. Firebase project configured with Realtime Database
2. GitHub repository with Firebase service account secrets
3. Domain configured in Firebase Hosting (optional)

## License

MIT License - see LICENSE file for details. 