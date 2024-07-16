const mongoose = require("mongoose");
const Review = require("./review.js");


const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    set: (v) => (v === "" ? "0" : v),
  },
  location: String,
  country: String,
  category: {
    type: String,
    required: true,
    enum: [
      "Top Cities",
      "Rooms",
      "Mansions",
      "Cabins",
      "Tropical",
      "Beach",
      "Lakes",
      "Arctic",
      "Desert",
      "Mountains",
      "Countryside",
      "Camping",
      "Swimming Pools",
      "Amazing Views",
      "Historical Homes",
    ],
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      default: [0, 0],
    },
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
