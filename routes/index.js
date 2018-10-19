var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/advanced_search', function (req, res, next) {

    res.render('advanced_search', {cats: categories});
});
router.get('/fav', function (req, res, next) {
    res.render('fav', {title: 'Express'});
});
router.get('/missions', function (req, res, next) {
    res.render('missions', {title: 'Express'});
});
router.get('/messages', function (req, res, next) {
    res.render('messages', {title: 'Express'});
});
router.get('/message:id', function (req, res, next) {
    res.render('message', {title: 'Express'});
});
router.get('/profile', function (req, res, next) {
    res.render('profile', {title: 'Express'});
});

module.exports = router;
