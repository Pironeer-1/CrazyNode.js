//DB
const db = require('../config/db.js');

module.exports = {
    getPost: async (postId) => {
        const query = `SELECT * FROM Posts WHERE post_id=?`;
        const postData = await db.query(query, [postId]);
        return postData[0][0];
    }
}