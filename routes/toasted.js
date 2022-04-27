
var express = require('express');
const toasted_controlers= require('../controllers/toasted');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('toasted', { title: 'Search Results toasted class' });
});



//var express = require('express');
//const toasted_controlers= require('../controllers/toasted');
var router = express.Router();
/* GET costumes */
router.get('/', toasted_controlers.toasted_view_all_Page );
module.exports = router;

module.exports = router;

/* GET detail bakery page */
router.get('/detail', toasted_controlers.toasted_view_one_Page);

/* GET create bakery page */
router.get('/create',secured, toasted_controlers.toasted_create_Page);
//router.get('/create',toasted_controlers.toasted_create_Page);


/* GET create update page */
router.get('/update',secured, toasted_controlers.toasted_update_Page);
//router.get('/update',toasted_controlers.toasted_update_Page);

/* GET create bakery page */
router.get('/delete',secured, toasted_controlers.toasted_delete_Page);

//router.get('/delete',toasted_controlers.toasted_delete_Page);

