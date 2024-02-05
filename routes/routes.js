const express = require('express');
const router = express.Router();
const rootDir = require('../utils/path');
const path = require('path');
router.get("/",(req, res) => {
    res.sendFile(path.join(rootDir,"views","subs.html"));
})
router.post("/subs-data",(req, res) => {
        const {name, password, subType, emailType, comments} = req.body;
        res.render('data',{
        name,
        password,
        subType,
        emailType,
        comments
    })
})

module.exports = router;