var express = require('express');
// const { set } = require('../app');
var router = express.Router();

var viewerpp = {
  '/m1': 0,
  '/m2': 0,
  '/m3': 0,
  '/m4': 0,
  '/m5': 0,
  '/m6': 0,
  '/m7': 0
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'my ProfDev journey' });
});

router.get('/vpp', function(req, res, next) {
  res.json(viewerpp);

});

router.get('/m1', function(req, res, next) {
  res.render('m1', { title: 'M1' });
  countRequest('/m1');
});
router.get('/m2', function(req, res, next) {
  res.render('m2', { title: 'M2' });
  countRequest('/m2');
});
router.get('/m3', function(req, res, next) {
  res.render('m3', { title: 'M3' });
  countRequest('/m3');
});
router.get('/m4', function(req, res, next) {
  res.render('m4', { title: 'M4' });
  countRequest('/m4');
});
router.get('/m5', function(req, res, next) {
  res.render('m5', { title: 'M5' });
  countRequest('/m5');
});
router.get('/m6', function(req, res, next) {
  res.render('m6', { title: 'M6' });
  countRequest('/m6');
});
router.get('/m7', function(req, res, next) {
  res.render('m7', { title: 'M7' });
  countRequest('/m7');
});

async function countRequest(route) {

  viewerpp[route] = (viewerpp[route] || 0) + 1;
  console.log(viewerpp);

  setTimeout(() => {
      viewerpp[route] -= 1;
      if (viewerpp[route] <= 0) {
          viewerpp[route] = 0;
      }
  }, 300000);
}

module.exports = router;