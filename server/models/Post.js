const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;