const mongoose = require("mongoose");

//  schema setup
const dogParkSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  comments: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment"
      }
  ]
});

module.exports = mongoose.model("DogPark", dogParkSchema);
