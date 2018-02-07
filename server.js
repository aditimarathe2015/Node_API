

var express = require('express');

var path = require('path');
var bodyParser = require('body-parser');

var user = require('./routes/user');
var task = require('./routes/task');

var port = 3000;
var app =express();

    
//view engine 
 app.set('views',path.join(__dirname,'views'));
 app.set('view engine','ejs');
 app.engine('html',require('ejs').renderFile);

//set static folder
 app.use(express.static(path.join(__dirname,'client')));

 //body parser MW
 app.use(bodyParser.json);
 app.use(bodyParser.urlencoded({extended:false}));


  app.use('/',user);
  app.use('/api',task);

app.listen(port,function(){
    console.log('server satred on port '+port);
});


module.export=app;