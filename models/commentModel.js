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
    }
}