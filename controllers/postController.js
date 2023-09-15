const postModel = require('../models/postModel.js');
const homeModel = require('../models/homeModel.js');

module.exports = {
    viewPost: async (req, res) => {
        const postId = req.params.post_id;
        const posts = await homeModel.getPosts();
        const post = await postModel.getPost(postId);

        res.render('post.ejs', {posts: posts, post: post});
    }
}