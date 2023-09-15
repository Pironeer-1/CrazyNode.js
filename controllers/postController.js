const postModel = require('../models/postModel.js');
const homeModel = require('../models/homeModel.js');
const commentModel = require('../models/commentModel.js');

module.exports = {
    viewPost: async (req, res) => {
        const postId = req.params.post_id;
        const posts = await homeModel.getPosts();
        const post = await postModel.getPost(postId);

        //댓글 가져오기
        const comments = await commentModel.getComments(postId);

        res.render('post.ejs', {posts: posts, post: post, comments: comments});
    },
    createPost: async (req, res) => {
        const posts = await homeModel.getPosts();
        res.render('createPost.ejs', {posts: posts});
    },
    createNewPost: async (req, res) => {
        const newPostData = req.body;
        const newPostKey = await postModel.createNewPost(newPostData);
        res.redirect(`/post/read/${newPostKey}`);
    },
    deletePost: async (req, res) => {
        const postId = req.params.post_id;
        await postModel.deletePost(postId);
        res.redirect('/');
    },
    updatePost: async (req, res) => {
        const postId = req.params.post_id;
        const posts = await homeModel.getPosts();
        const post = await postModel.getPost(postId);
        res.render('updatePost.ejs', {posts: posts, post: post});
    },
    updatePostProcess: async (req, res) => {
        const postId = req.params.post_id;
        const updatedPostData = req.body;
        await postModel.updatePost(updatedPostData, postId);
        res.redirect(`/post/read/${postId}`);
    }
}