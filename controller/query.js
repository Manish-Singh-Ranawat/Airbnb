const Listing = require("../models/listing.js");

module.exports.category = async (req, res) => {
  let { id } = req.params;
  let listings;
  if (id === "Trending") {
    listings = await Listing.aggregate([{ $sample: { size: 12 } }]);
  } else {
    listings = await Listing.find({ category: id });
  }
  if (listings.length == 0) {
    req.flash("error", ` Listing with ${id} category not found`);
    return res.redirect("/listings");
  }
  res.render("pages/home.ejs", { listings });
};

module.exports.search = async (req, res) => {
  let { input } = req.query;
  if (input) {
    input = input.trim();
    const regex = new RegExp(input, "i");
    let query = {
      $or: [
        { title: regex },
        { description: regex },
        { location: regex },
        { country: regex },
      ],
    };
    const listings = await Listing.find(query);
    if (!listings.length) {
      req.flash("error", "No results found");
      return res.redirect("/listings");
    }
    res.render("pages/home.ejs", { listings });
  }
};

module.exports.sort = async (req, res) => {
  let { flexRadioDefault } = req.query;
  let sortParams = JSON.parse(flexRadioDefault);
  let query = {};
  query[sortParams.type] = sortParams.order;
  const listings = await Listing.find().sort(query);
  res.render("pages/home.ejs", { listings });
};

module.exports.filter = async (req, res) => {
  let { flexRadioDefault, location, minPrice, maxPrice } = req.query;
  let query = {};
  if (flexRadioDefault === "location") {
    location = location.trim();
    const regex = new RegExp(location, "i");
    query = {
      $or: [{ location: regex }, { country: regex }],
    };
  } else if (flexRadioDefault === "price") {
    query.price = { $gte: minPrice, $lte: maxPrice };
  }
  const listings = await Listing.find(query);
  if (!listings.length) {
    req.flash("error", "No results found");
    return res.redirect("/listings");
  }
  res.render("pages/home.ejs", { listings });
};
