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
    }
}