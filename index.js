const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
// const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// const flash = require('connect-flash');
// const customMware = require('./config/middleware');


app.use(express.static('./assets'));

// app.use(expressLayouts);
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const path = require('path');

// app.use(flash());
// app.use(customMware.setFlash);
//set up the routes
app.use('/', require('./routes'));
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');




app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log( `Server is up and running on port: ${port}`);
});