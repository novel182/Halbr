var express = require('express');
var emailRouter = express.Router();

var email = require('../database/models/email');

emailRouter.route('/add/post').post(function (req, res) {
    var email = new email(req.body);
   
    

})


module.exports = emailRouter;
