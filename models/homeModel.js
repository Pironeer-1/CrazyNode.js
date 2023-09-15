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
    getPosts: async (req, res) => {
        const query = 'SELECT * FROM Posts;';
        const posts = await db.query(query);

        return posts[0];
    }
}