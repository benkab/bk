var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/apogee', function(req, res, next) {
  res.render('one', { title: 'Express' });
});

router.get('/two', function(req, res, next) {
  res.render('two', { title: 'Express' });
});

router.get('/three', function(req, res, next) {
  res.render('three', { title: 'Express' });
});

router.get('/four', function(req, res, next) {
  res.render('four', { title: 'Express' });
});

router.get('/five', function(req, res, next) {
  res.render('five', { title: 'Express' });
});

router.get('/six', function(req, res, next) {
  res.render('six', { title: 'Express' });
});

router.get('/seven', function(req, res, next) {
  res.render('seven', { title: 'Express' });
});

router.get('/eight', function(req, res, next) {
  res.render('eight', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

module.exports = router;
