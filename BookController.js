var mongoose = require('./DBConfig');
var BookSchema = mongoose.model('Book');

var BookController = function(){

    this.addBook = function(data){
        return new Promise(function(resolve,reject){
            var book = new BookSchema({
                name : data.name,
                author : data.author,
                price : data.price
            });

            book.save().then(function(){
                resolve({status:201, message:'Book Inserted'});
            }).catch(function (err) {
                reject({status:500, message : 'Error - '+ err});
            })
        })
    }

    this.getAll = function(){
        return new Promise(function (resolve, reject) {
            BookSchema.find().exec().then(function (data) {
                resolve({status:200, message: data});
            }).catch(function(err){
                reject({status:500, message:'Error - '+err});
            })
        })
    }

    this.getById = function(id){
        return new Promise(function(resolve,reject){
            BookSchema.find({_id:id}).exec().then(function(data){
                resolve({status:200, message: data});
            }).catch(function(err){
                reject({status:500, message: 'Error - '+err});
            })
        })
    }

    this.updateBook = function(id,data){
        return new Promise(function(resolve,reject){
            BookSchema.update({_id:id},data).then(function(){
                resolve({status:200, message: 'Book Updated'});
            }).catch(function(err){
                reject({status:500, message:'Error - '+err});
            })
        })
    }

    this.deleteBook = function(id){
        return new Promise(function(resolve,reject){
            BookSchema.remove({_id:id}).then(function(){
                resolve({status:200, message:'Book deleted!'});
            }).catch(function (err) {
                reject({status:500, message : 'Error - '}+ err);
            })
        })
    }
}

module.exports = new BookController();