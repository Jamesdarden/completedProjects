const express = require('express');
const router = express.Router();

// router.get('/', (req, res)=> res.send('welcome'))
router.get('/', (req, res)=> res.render('welcome')) // to render page 


module.exports = router;