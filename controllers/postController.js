const postModel = require('../models/postModel.js');
const homeModel = require('../models/homeModel.js');

module.exports = {
    viewPost: async (req, res) => {
        const postId = req.params.post_id;
        const posts = await homeModel.getPosts();
        const post = await postModel.getPost(postId);

        res.render('post.ejs', {posts: posts, post: post});
    },
    createPost: async (req, res) => {
        const posts = await homeModel.getPosts();
        res.render('createPost.ejs', {posts: posts});
    },
    createNewPost: async (req, res) => {
        const newPostData = req.body;
        const newPostKey = await postModel.createNewPost(newPostData);
        res.redirect(`/post/read/${newPostKey}`);
    }
}