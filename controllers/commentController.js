const commentModel = require('../models/commentModel.js');
const postModel = require('../models/postModel.js');
const homeModel = require('../models/homeModel.js');

module.exports = {
    createComment: async (req, res) => {
        const newCommentData = req.body;
        const postId = req.params.post_id;
        const commentId = await commentModel.createComment(postId, newCommentData);
        // res.redirect(`/post/read/${postId}`);
        res.json({commentId: commentId});
    },
    deleteComment: async (req, res) => {
        // const commentId = req.params.comment_id;
        const commentId = req.body.commentId;
        const result = await commentModel.deleteComment(commentId);
        
        // res.redirect(`/post/read/${result.post_id}`);
        res.json();
    }
}