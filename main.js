const express = require('express');
const app = express();
const port = 3000;

//View Engine
app.set("view engine", "ejs");
app.set("views", "views");
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'index.ejs');

//Controllers
const homeController = require('./controllers/homeController.js');
const postController = require('./controllers/postController.js');

app.get('/', homeController.home);

app.get('/post/read/:post_id', postController.viewPost);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});