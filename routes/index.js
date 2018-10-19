var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/advanced_search', function (req, res, next) {

    res.render('advanced_search', {title: "Advandced Searched"});
});
router.get('/favs', function (req, res, next) {
    items = [
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },
        {
            name : "Germaine"
        },

        {
            name : "Germaine"
        }

    ];

    res.render('fav', {title: 'Favorites', items: items});
});
router.get('/missions', function (req, res, next) {
    let projects = [
        {
            name : "Kiddie Proxy",
            desc: "Proxy for kiddies",
            ppl : "Jules Rognoni",
            hour : new Date().toLocaleTimeString(),
        },
        {
            name : "Projet Zoulou",
            desc: "Un projet super",
            ppl: "Jules Rognoni",
            hour : new Date().toLocaleTimeString(),
        },
        {
            name : "Go Milou !",
            desc: "Detecte le Shadow IT !",
            ppl : "Tom Barnier",
            hour : new Date().toLocaleTimeString(),
        },
        {
            name : "Labo Secu",
            desc: "Sekuritay",
            ppl: "Aria Groult",
            hour : new Date().toLocaleTimeString(),
        },
        {
            name : "Super Projet",
            lastMsg: "Hello....",
            ppl: "Jean Michel Olifirenkof",
            hour : new Date().toLocaleTimeString(),
        }
    ];
    res.render('missions', {title: 'Missions', missions:  projects});
});

router.get('/mission/:id', function (req, res, next) {
    let project =  {
        name : "Kiddie Proxy",
        desc: "Proxy for kiddies",
        ppl : "Jules Rognoni",
        hour : new Date().toLocaleTimeString(),
    };
    res.render('mission', {title:  project.name, mission:  project});
});

router.get('/messages', function(req, res, next) {

    let messages = [
        {
            name : "Bob",
            lastMsg: "Bonjour....",
            msgs : [],
            hour : new Date().toLocaleTimeString(),
        },
        {
            name : "Sully",
            lastMsg: "Tu as pu avancer le projet ",
            msgs : [],
            hour : new Date().toLocaleTimeString(),
        },
        {
            name : "Germaine",
            lastMsg: "Hello....",
            msgs : [],
            hour : new Date().toLocaleTimeString(),
        },
        {
            name : "Leon",
            lastMsg: "Grrr",
            msgs : [],
            hour : new Date().toLocaleTimeString(),
        },
        {
            name : "Germaine",
            lastMsg: "Hello....",
            msgs : [],
            hour : new Date().toLocaleTimeString(),
        }
    ];


    res.render('messages', { title: 'Messages', messages: messages });
});
router.get('/message/:id', function (req, res, next) {
    res.render('message', {title: 'Express'});
});
router.get('/profile', function (req, res, next) {
    res.render('profile', {title: 'Express'});
});

module.exports = router;
