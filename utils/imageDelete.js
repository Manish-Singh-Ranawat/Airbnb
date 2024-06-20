const cloudinary = require("cloudinary").v2;

module.exports.getPublicIdFromUrl = (url) => {
  const urlParts = url.split("/");
  // Get the folder
  const folder = urlParts[urlParts.length - 2];
  // filename
  const filenameWithExtension = urlParts[urlParts.length - 1];
  const filenameWithoutExtension = filenameWithExtension.split(".")[0];
  //public id
  const publicId = `${folder}/${filenameWithoutExtension}`;
  return publicId;
};

module.exports.deleteImage = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId, { invalidate: true });
  } catch (error) {
    throw new ExpressError(400, "Error deleting image");
  }
};
