//Models
const homeModel = require('../models/homeModel.js');

// exports.home = async (req, res) => {
//     const posts = await homeModel.getPosts(req, res);
//     res.render('index.ejs', {'posts': posts});
// }
module.exports = {
    home: async (req, res) => {
        const posts = await homeModel.getPosts(req, res);
        res.render('index.ejs', { 'posts': posts });
    }
}