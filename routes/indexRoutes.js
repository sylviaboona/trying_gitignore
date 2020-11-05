const _express = require("express");
const router = _express.Router();

router.get('/welcome', (req, res) => {
    res.render('form1', {title:'MyForm'});
  }); 
router.post('/welcome', (req, res) => {
    console.log(req.body);
    res.redirect('/myform');
  });


module.exports = router;