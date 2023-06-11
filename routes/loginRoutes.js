const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next)=>{
    res.send('/html/login.html');
});
router.get('/register', (req, res, next)=>{

});