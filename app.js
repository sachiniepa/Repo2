var express = require('express');
var BodyParser = require('body-parser');
var cors = require('cors');
var Routes = require('./Routes');

const app = express();

app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());
app.use(cors());
app.use('/',Routes);

app.listen(8080 , 'localhost', function(err){
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('Server listening on port 8080..');
})