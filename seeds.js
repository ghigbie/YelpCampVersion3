const mongoose = require("mongoose");
const Campground = require("./models/campground");

var data = [
    {
        name: "Cloud's Rest",
        image: "http://i.imgur.com/nGSZnHN.jpg",
        description: "A nice place to camp with great sky views"
    },
    {
        name: "Granite Mountain's Rest",
        image: "https://s-media-cache-ak0.pinimg.com/originals/9a/85/d8/9a85d8b22e42dd423da0afce92b43d28.jpg",
        description: "A nice place to camp with great mountain views"
    },
    {
        name: "Lake's Rest",
        image: "http://www.lake-lewisville.org/wp-content/uploads/2012/07/Sycamore-Bend-Campgrounds-2.jpg",
        description: "A nice place to camp with great mountain views"
    },
    ];

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");
    });
    //add a few campgrounds
    Campground.create
    
    //add a few comments
}

module.exports = seedDB;    