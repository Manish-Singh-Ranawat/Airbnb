const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().min(1).max(255).required(),
    description: Joi.string().min(1).max(5000).required(),
    price: Joi.number().positive().required(),
    country: Joi.string().min(1).max(255).required(),
    location: Joi.string().min(1).max(255).required(),
    category: Joi.string()
      .valid(
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
        "Historical Homes"
      )
      .required(),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
