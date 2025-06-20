const cloudinary = require("cloudinary").v2;
const multer = require("multer")

cloudinary.config({
    cloud_name:"difwzzjt4",
    api_key:494398322994377,
    api_secret:"2NxqVHv4Ag6V9icLLuQA0YqUB1Q"
})

const storage = new multer.memoryStorage();
async function imageUploadUtil(file) {
  try {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    console.log("Cloudinary Result:", result); // <-- yahan check karo
    return result;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error); // <-- exact error yahan aayega
    throw error;
  }
}


const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };