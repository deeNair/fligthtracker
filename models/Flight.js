const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
airline:{
    type:String,
    require:true,
    enum:['American','Southwest','United']
},
flightNo:{
    type:String,
    min:10,
    max:9999
},
departs:{
    type:Date,
    default:new Date()
    //require:true
}
},
{timestamps:true}
)

const Flight = mongoose.model('Flight',flightSchema)
module.exports = Flight;