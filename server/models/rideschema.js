const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    publisher_id:{
        required:true,
        type: String
    },
    publisher:{
        required:true,
        type: String
    },
    price:{
        // required:true, 
        type: Number
    },
    from:{
        required:true,
        type: String
    },
    to:{
        required:true,
        type: String
    },
    time:{
        // required:true,
        type: Number
    },
    date:{
        required:true,
        type: Date
    },
    passenger:{
        required:true,
        type: Number
    },
    passengers_id:[
        {
            passenger_id:{
                required:true,
                type: String
            }
        }
    ]
}) 

module.exports = Ride = mongoose.model('RIDE', rideSchema);