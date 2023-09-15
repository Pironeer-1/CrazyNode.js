//DB
require('dotenv').config();
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = {
    getPost: async (postId) => {
        const query = `SELECT * FROM Posts WHERE post_id=?`;
        const postData = await db.query(query, [postId]);
        return postData[0][0];
    }
}