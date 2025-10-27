# The Pickleball Guys - React Website

A fully responsive React website for The Pickleball Guys, converted from the original HTML/CSS site in the part7 folder.

## Features

- Responsive design that works on all screen sizes
- React Router for navigation between pages
- Component-based architecture
- Individual stylesheets for pages and components

## Pages

- **Home** - Hero section, features, about preview, services, gallery preview, and contact section
- **How To Play** - Comprehensive guide with instruction cards
- **Shop** - Product catalog with product cards
- **Gallery** - Photo gallery with gallery cards
- **Near You** - Local courts and groups information
- **About Us** - Information about The Pickleball Guys

## Components

- **Header** - Site header with logo and email
- **Nav** - Navigation menu with React Router links
- **Footer** - Site footer with contact info and quick links
- **FeatureCard** - Reusable card for displaying features
- **InstructionCard** - Card for displaying how-to-play instructions
- **ProductCard** - Card for displaying shop products
- **GalleryCard** - Card for displaying gallery images
- **CourtCard** - Card for displaying court information
- **GroupItem** - List item for displaying group information

## Running the App

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Nav.jsx
│   ├── Footer.jsx
│   ├── FeatureCard.jsx
│   ├── InstructionCard.jsx
│   ├── ProductCard.jsx
│   ├── GalleryCard.jsx
│   ├── CourtCard.jsx
│   └── GroupItem.jsx
├── pages/
│   ├── Home.jsx
│   ├── AboutUs.jsx
│   ├── HowToPlay.jsx
│   ├── Shop.jsx
│   ├── Gallery.jsx
│   └── NearYou.jsx
├── css/
│   ├── App.css
│   ├── index.css
│   ├── Header.css
│   ├── Nav.css
│   ├── Footer.css
│   ├── FeatureCard.css
│   ├── InstructionCard.css
│   ├── ProductCard.css
│   ├── GalleryCard.css
│   ├── CourtCard.css
│   ├── GroupItem.css
│   ├── Home.css
│   ├── AboutUs.css
│   ├── HowToPlay.css
│   ├── Shop.css
│   ├── Gallery.css
│   └── NearYou.css
├── App.jsx
└── index.js

public/
└── images/
    └── (all pickleball images)
```

## Notes

- Forms functionality not yet implemented
- Toggle navigation menu not yet implemented
- JSON data integration will be added in future updates
- iFrames (map) will be added in future updates
