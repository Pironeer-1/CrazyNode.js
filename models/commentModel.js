//DB
const db = require('../config/db.js');

module.exports = {
    getComments: async (postId) => {
        const query = `SELECT * FROM Comments WHERE post_id=?;`;
        const comments = await db.query(query, [postId]);

        return comments[0];
    },
    createComment: async (postId, newCommentData) => {
        const query = `INSERT INTO Comments (post_id, username, content) VALUES (?, ?, ?);`;
        await db.query(query, [postId, newCommentData.username, newCommentData.content]);
    },
    deleteComment: async (commentId) => {
        const query = `DELETE FROM Comments WHERE comment_id=?;`;
        const postIdQuery = `SELECT post_id FROM Comments WHERE comment_id=?;`;
        // 댓글의 포스트 ID 가져오기
        const result = await db.query(postIdQuery, [commentId]);
        // 댓글 삭제
        await db.query(query, [commentId]);
        return result[0][0];
    }
}