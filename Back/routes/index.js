var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  global.db.insert("customers", {"nome":"nero", "idade":5 }, ()=>{});
  
  global.db.findAll("customers", (e, docs) => {
    if (e) {
      return console.log(e);
    }
    //console.log(docs);
    res.render('index', { title: 'Lista de clientes', docs: docs });
  })

});

module.exports = router;
