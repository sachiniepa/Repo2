var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    author : {
        type: String,
        required : true
    },

    price : {
        type : Number,
        required : true
    }
});

mongoose.model('Book',BookSchema);

mongoose.connect('mongodb://127.0.0.1:27017/demo',function(err){
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('DB Connected!');
});

module.exports = mongoose;