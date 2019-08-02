var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var item = new Schema({
    email: String,
}, {
        collection: 'items'
    });

module.exports = mongoose.model('item', item);