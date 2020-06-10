const mongoose =require('mongoose');
//provide connection to the database
 
mongoose.connect(`mongodb://localhost:27017/events_db`, { useNewUrlParser: true });


const db = mongoose.connection;

//when there is an console.error
db.on('error' , console.error.bind(console, "Error connecting to the mongoDB"));
//connection successfull
db.once('open' , function(){
    console.log('Connected to the DATABASE: MongoDB');
}
);

 module.exports = db; 
