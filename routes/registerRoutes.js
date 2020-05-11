const express = require('express');
const router = express.Router();
const User = require('../models/registerModel');
const path = require('path');



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
})

router.post("/", async (req, res)=> {
    try {
        var user = new User(req.body);
        await User.register(user, req.body.password, (err) => {
            if (err)  { throw err }
            console.log('Item has been saved')
            res.redirect('/login');
        });
    } catch (error) {
        res.status(400).send("unable to save to database");
    }
});

router.post("/adduser", async (req, res)=> {
    try {
        var myData = new User(req.body);
        await myData.save()
        console.log('Item has been saved')
        res.redirect('/userlist');
    } catch (error) {
        res.status(400).send("unable to save to database");
    }
 });


module.exports = router;