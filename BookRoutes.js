var express = require('express');
var router = express.Router();
var controller = require("./BookController");

router.post('/',function(req,res){
    controller.addBook(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.get('/',function(req,res){
    controller.getAll().then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(function(err){
        res.status(err.status).send({message: err.message});
    })
});

router.get('/:id', function(req,res){
    controller.getById(req.params.id).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.put('/:id', function(req,res){
    controller.updateBook(req.params.id,req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.delete('/:id',function(req,res){
    controller.deleteBook(req.params.id).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;
