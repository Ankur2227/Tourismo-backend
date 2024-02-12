const mongoose = require("mongoose");

const postModel = mongoose.Schema(
  {
    postID: { type: String, trim: true },
    caption: { type: String, default: '' },
    photos: { type: [String], default: [] },
    datePosted: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postModel);

module.exports = Post;
