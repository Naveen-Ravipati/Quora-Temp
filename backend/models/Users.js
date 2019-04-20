var mongoose = require('mongoose')

const users = new mongoose.Schema({

user_id:{
    type:String
},
email:{
    type:String
},
passwod:{
    type:String
},  
first_name:{
    type:String
},

last_name:{
    type:String
},
status:{
    type:String
},
city:{
type:String
},
state:{
    type:String
},
zip_code:{
type:String,
},
profile_image:{
    type:BigInt64Array
},
education:{
    type:String
},
career_info:{
    type:String
},
about:{
    type:String
},
credentials:{
    type:Array
},
activity:{
    type:Array
},
messages:{
    type:Array
},
questions:{
    type:Array
},
questions_followed:{
    type:Array
},
answers_bookmarked:{
    type:Array
},
topics:{
    type:Array
},
followers:{
    type:Array
},
following:{
    type:Array
},
profile_views:{
    type:Array
},
questions_answered:{
    type:Array
},

},{strict:"false"})
var Users = mongoose.model('Users',users);
module.exports = Users;
