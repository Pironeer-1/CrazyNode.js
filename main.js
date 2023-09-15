const express = require('express');
const app = express();
const port = 3000;

//View Engine
app.set("view engine", "ejs");
app.set("views", "views");

//Controllers
const homeController = require('./controllers/homeController.js');

app.get('/', homeController.home);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});