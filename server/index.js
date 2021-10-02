const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const Post = require("./models/Post")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://new-user:databasesql@cluster0.01cfi.mongodb.net/pastebin-clone?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

app.post("/post", async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const date = req.body.date;

    const post = new Post({
        name: name,
        description: description,
        date: date
    })

    try {
        await post.save();
        res.send("insert data")
    } catch (error) {
        console.log(error);
    }
})

app.get("/get", async (req, res) => {
    Post.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
})

app.put("/put", async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const id = req.body.id;

    try {
        await Post.findById(id, (err, updatedPost) => {
            updatedPost.name = name;
            updatedPost.description = description;
            updatedPost.save("update");
        })
    } catch (error) {
        console.log(error);
    }
})

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    await Post.findByIdAndRemove(id).exec();
    res.send("deleted");
})

app.listen(4000, () => {
    console.log("Server is running")
});