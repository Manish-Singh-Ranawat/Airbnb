const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const { getPublicIdFromUrl, deleteImage } = require("../utils/imageDelete.js");

const NodeGeocoder = require("node-geocoder");
const options = {
  provider: "opencage",
  apiKey: process.env.GEOCODING_KEY,
  formatter: null, 
};
const geocoder = NodeGeocoder(options);


module.exports.home = async (req, res) => {
  req.session.redirectUrl = req.originalUrl;
  let listings = await Listing.find();
  res.render("pages/home.ejs", { listings });
};

module.exports.newListingPage = (req, res) => {
  res.render("pages/new.ejs");
};

module.exports.showListing = async (req, res) => {
  req.session.redirectUrl = req.originalUrl;
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", " Listing Not Found");
    return res.redirect("/listings");
  }
  res.render("pages/show.ejs", {
    listing,
    mapApiKey: process.env.MAP_API_KEY,
    coordinates: listing.geometry.coordinates,
  });
};

module.exports.createListing = async (req, res) => {
  if (!req.body.listing) {
    throw new ExpressError(400, "Invalid data was send");
  }
  geoData = await geocoder.geocode(req.body.listing.location);
  const locationData = geoData[0];
  const coordinates = [locationData.longitude, locationData.latitude];

  // Create GeoJSON format
  const geojson = {
    type: "Point",
    coordinates: coordinates,
  };

  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = geojson;
   await newListing.save();
  req.flash("success", "Listing Added");
  res.redirect("/listings");
};

module.exports.editListingPage = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", " Listing Not Found");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("pages/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  if (!req.body.listing) {
    throw new ExpressError(400, "Invalid data was send");
  }
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  geoData = await geocoder.geocode(req.body.listing.location);
  const locationData = geoData[0];
  const coordinates = [locationData.longitude, locationData.latitude];

  // Create GeoJSON format
  const geojson = {
    type: "Point",
    coordinates: coordinates,
  };
  listing.geometry = geojson;
  await listing.save();
  if (typeof req.file !== "undefined") {
    let publicId = getPublicIdFromUrl(listing.image.url);
    await deleteImage(publicId);
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", " Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndDelete(id);
  let publicId = getPublicIdFromUrl(listing.image.url);
  await deleteImage(publicId);
  req.flash("success", " Listing Deleted");
  res.redirect(`/listings`);
};
