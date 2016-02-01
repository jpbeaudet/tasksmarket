var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Data = new Schema({
    username: String,
    userId: String,
    clientType:String,
    isAdmin: Boolean
});


module.exports = mongoose.model('data', Data);