const express = require('express');
require('dotenv').config();
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    const query = 'SELECT * FROM Posts;';
    const result = await db.query(query);
    let list = ``;
    for(let data of result[0]) {
        list += `<li><a href="/post/read/${data.post_id}">${data.title}</a></li>`;
    }

    const template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>WEB</h1>
        <ol>
            ${list}
        </ol>
        <a href="/post/create">create</a>
    </body>
    </html>
    `
    res.send(template);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});