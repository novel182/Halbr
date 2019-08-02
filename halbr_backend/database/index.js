const mongoose = require('mongoose')

const uri ="mongodb+srv://halbrapp:halbr2019@cluster0-t2noa.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(uri).then(
    () => {
        console.log('Connect to Mongo');
    },

    err => {

        console.log("Error connecting to Mongo:")
        console.log(err);
    }

);

module.exports = mongoose.connection