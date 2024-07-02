const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    gmail:String,
    phone:Number,
    username:String,
    pass:String
})

module.exports = mongoose.model("admin",UserSchema);