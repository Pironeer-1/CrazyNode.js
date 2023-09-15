//DB
const db = require('../config/db.js');

module.exports = {
    getPost: async (postId) => {
        const query = `SELECT * FROM Posts WHERE post_id=?`;
        const postData = await db.query(query, [postId]);
        return postData[0][0];
    },
    createNewPost: async (newPostData) => {
        const query = `INSERT INTO Posts (title, content) VALUES (?, ?);`;
        const result = await db.query(query, [newPostData.title, newPostData.content]);
        return result[0].insertId;
    },
    deletePost: async (postId) => {
        const query = `DELETE FROM Posts WHERE post_id=?;`;
        await db.query(query, [postId]);
    },
    updatePost: async (updatedPostData, postId) => {
        const query = `
        UPDATE Posts
        SET title=?, content=?
        WHERE post_id=?;
        `;
        await db.query(query, [updatedPostData.title, updatedPostData.content, postId]);
    }
}