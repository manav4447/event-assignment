const mongoose = require('mongoose');

const eventSchema =  mongoose.Schema({
  name:{
      type: String,
      required: true
  },
  category:{
      type: String,
      required: true 
  } ,
  description:{
      type: String,
      required: true
  },
  location:{
      type: String,
      required: true
  },
  time:{
    type: String,
    required: true
  }
 } ,{
  
  timestamps : true

      });
 
    //   module.exports  = new mongoose.model("Event", eventSchema);
    const Event = new mongoose.model('Event', eventSchema);//name of a model following a schema
    module.exports = Event;
      
      