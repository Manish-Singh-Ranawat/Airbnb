const mongoose = require("mongoose");
let {sampleData} = require("./data.js");
const Listing = require("../models/listing.js");

const path = require('path');
const dotenv = require('dotenv');

// Construct the path to the .env file
const parentDir = path.resolve(__dirname, '..');
const dotenvPath = path.join(parentDir, '.env');

// Load the .env file
dotenv.config({ path: dotenvPath });

// Access the environment variables

const dbUrl = process.env.ATLAS_DB_URL;
async function main() {
  await mongoose.connect(dbUrl)
}

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("error in db --", err);
  });


const initDB = async () => {
  sampleData = sampleData.map((obj)=>({...obj, owner:"6672c5bcfd844d6b3a79767b"}))
  let saved = await Listing.insertMany(sampleData);
  console.log(saved);
};

initDB();