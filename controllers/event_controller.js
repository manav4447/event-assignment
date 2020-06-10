// const path = require('path')
const Event = require('../models/event')
module.exports.home = function(req,res){
   return res.render("landing-page",{
        title : "Events" 

   });
}


module.exports.createEvent = async function(req,res){
console.log(req.body)
try{
    const event = await Event.create({
    
        name: req.body.name,
        category: req.body.selectpicker, 
        description: req.body.description,
        time: req.body.time,
        location: req.body.location
    });
  //save the data in database
    event.save();
    // req.flash('success', 'event -created');
    return res.redirect('back');
    return res.render('upload-event',{
        title: "Admin",
        event: event
    });
  
}

catch(err){
    return res.json(500, {
        message: 'Internal Server Error'
    });
}
}


module.exports.userEvent  =  function(req,res){
    Event.find({},function(err, event){
        if(err)
        {
            console.log('error is ',err);
        }
        console.log(event);
        return res.render('user-page', {
            title: "User",
            event:  event//error is here i have not populate the event correctly i think
        });//this is my populate code , i think i have made the mistake here,okk run ur code lets see
    });
//got any luck1??, ok borde
}
module.exports.allEvents  =  function(req,res){
    Event.find({},function(err, event){
        if(err)
        {
            console.log('error is ',err);
        }
        console.log(event);
        return res.render('admin-page', {
            title: "All-Events",
            event:  event
                });
    });
//got any luck1??, ok borde
}
module.exports.uploadEvent  =async  function(req,res){
    console.log(req.body);
    try{
        const event = await Event.create({
        
            name: req.body.name,
            category: req.body.selectpicker, 
            description: req.body.description,
            time: req.body.time,
            location: req.body.location
        });
      //save the data in database
        // event.save();
        // req.flash('success', 'event -created');
        // return res.redirect('back');
        return res.render('upload-event',{
            title: "Admin",
            event: event
        });
      
    }
    
    catch(err){
        console.log(err);
        return res.json(500, {
            message: 'Internal Server Error'
        });
    }
    }
    





