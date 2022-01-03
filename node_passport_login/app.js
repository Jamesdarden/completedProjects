const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');  //connects to database 

const app = express();

// db config 
const db= require('./config/keys').mongoURI;


// connect to mongo 
mongoose.connect(db,{useNewUrlParser:true ,useUnifiedTopology: true})
    .then(()=> console.log('mongoDB connected....'))
    .catch(err => console.log(err))

//ejs 
app.use(expressLayouts);
app.set('view engine', 'ejs');


//routes 
app.use('/', require('./routes/index' ));
app.use('/users', require('./routes/users' ));
app.use('/public', express.static('public'))


const PORT = process.env.PORT || 5000;

//app object
app.listen(PORT, console.log(`Server started on port ${PORT}`));