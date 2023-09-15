const express = require('express');
const app = express();
const port = 3000;

//DB
require('dotenv').config();
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

//View Engine
app.set("view engine", "ejs");
app.set("views", "views");

app.get('/', async (req, res) => {
    const query = 'SELECT * FROM Posts;';
    const posts = await db.query(query);

    res.render('index.ejs', {'posts': posts[0]});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});