const mongoose = require("mongoose");
const Campground = require("./models/campgrounds");

Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds");
});