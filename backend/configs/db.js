const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://maang:5225469462@cluster0.vox8una.mongodb.net/?retryWrites=true&w=majority"
  );
};
