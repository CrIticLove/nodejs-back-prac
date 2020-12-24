var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getData', (req, res, next) => {
  console.log(req.body, req.protocol);
  res.send({ data: 'data' });
})

module.exports = router;
