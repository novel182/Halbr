var express = require('express');
var emailRouter = express.Router();

var email = require('../database/models/email');

emailRouter.route('/add/post').post(function (req, res) {
    var email = new email(req.body);
    email.save()
    .then (email =>{
            res.status(200).json({Item:'Item added successfully'})
    })
            .catch (err => {
            res.status(400).send("unable to save to database");
            });
})


module.exports = emailRouter;
