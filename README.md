# Airbnb Clone Project

- This project is an Airbnb clone built using Express, Node.js, MongoDB, EJS, HTML, CSS, and JavaScript.
- Users can view listings, post, edit, and delete listings, add and delete reviews, log in, and sign up.
- The application also supports searching, filtering, and sorting listings by various categories.
- The website is responsive and designed using Bootstrap, FontAwesome, and Google Icons.
  
 **[View Live](https://airbnb-8bw3.onrender.com/)**
  
## Features

- **View Listings**: Browse all available listings.
- **Post, Edit, and Delete Listings**: Users can create, modify, and remove their listings.
- **Add and Delete Reviews**: Logged-in users can leave star-based ratings and comments on listings.
- **User Authentication**: Sign up and log in functionality.
- **Search, Filter, and Sort Listings**: Find specific listings based on various criteria.
- **Categorize Listings**: Organize listings by different categories.
- **Add New Listings**: Include title, description, price, location, country, category, and image.
- **Star-based Rating System**: Users can rate listings with stars.
- **Image Storage with Cloudinary**: Manage images efficiently.
- **Display Maps with MapTiler**: Show listing locations on maps.
- **Responsive Design**: Optimized for various devices using Bootstrap.
- **Icons from FontAwesome and Google Icons**: Enhance UI with iconography.

## Technologies Used

### Backend

- **Node.js**
- **Express**
- **MongoDB** (Mongo Atlas for data storage)
- **Mongoose**
- **Passport** (local strategy for authentication)
- **Express-session**
- **Connect-mongo**
- **Cloudinary**
- **Multer**
- **Joi**
- **Method-override**
- **Dotenv**
- **Node Geocoder** (using the OpenCage Geocoding API)

### Frontend

- **EJS**
- **HTML**
- **CSS**
- **JavaScript**
- **Bootstrap**
- **Starability** (for review stars)
- **MapTiler** (for maps)
- **FontAwesome**
- **Google Icons**

### Deployment

- **Render**

## Folder Structure

- **controllers/**: Contains the application logic for each route.
- **routes/**: Defines the application routes.
- **models/**: Contains the Mongoose models for MongoDB.
- **views/**: EJS templates for rendering HTML.
- **utils/**: Utility functions and middlewares.
- **public/**: Static files like CSS and JavaScript.

## Packages Used

- cloudinary: "^1.21.0"
- connect-flash: "^0.1.1"
- connect-mongo: "^5.1.0"
- dotenv: "^16.4.5"
- ejs: "^3.1.9"
- ejs-mate: "^4.0.0"
- express: "^4.18.3"
- express-session: "^1.18.0"
- geocoder: "^0.2.3"
- joi: "^17.12.3"
- method-override: "^3.0.0"
- mongoose: "^8.2.2"
- multer: "^1.4.5-lts.1"
- multer-storage-cloudinary: "^4.0.0"
- node-geocoder: "^4.3.0"
- passport: "^0.7.0"
- passport-local: "^1.0.0"
- passport-local-mongoose: "^8.0.0"

## Usage

### Viewing Listings

Navigate to the homepage to view all listings. Use the search, filter, and sort options to find specific listings.

### Adding a Listing

1. Log in to your account.
2. Click on the "Add Listing" button.
3. Fill in the form with the title, description, price, location, country, category, and image.
4. Submit the form to add the listing.

### Editing or Deleting a Listing

1. Log in to your account.
2. Navigate to your listing.
3. Click on the "Edit" or "Delete" button to modify or remove the listing.

### Adding a Review

1. Log in to your account.
2. Navigate to a listing.
3. Scroll down to the reviews section.
4. Fill in the review form with your stars and comments.
5. Submit the review.

## Acknowledgements

- [Cloudinary](https://cloudinary.com/)
- [MapTiler](https://www.maptiler.com/)
- [Starability](https://github.com/LunarLogic/starability)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Render](https://render.com/)
- [Bootstrap](https://getbootstrap.com/)
- [FontAwesome](https://fontawesome.com/)
- [Google Icons](https://fonts.google.com/icons)
- [OpenCage Geocoding API](https://opencagedata.com)
