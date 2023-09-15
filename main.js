const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//View Engine
app.set("view engine", "ejs");
app.set("views", "views");
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'index.ejs');
app.set("layout extractStyles", true);

//Static File
app.use(express.static('public'));

//Controllers
const homeController = require('./controllers/homeController.js');

app.get('/', homeController.home);

//Routers
const postRouter = require('./routers/postRouter.js');

app.use('/post', postRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});