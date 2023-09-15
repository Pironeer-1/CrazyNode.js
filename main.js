const express = require('express');
const app = express();
const port = 3000;

//View Engine
app.set("view engine", "ejs");
app.set("views", "views");

//Models
const homeModel = require('./models/homeModel.js');

app.get('/', async (req, res) => {
    const posts = await homeModel.getPosts(req, res);
    res.render('index.ejs', {'posts': posts});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});