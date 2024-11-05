const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
        name:String,
        email:String,
        password:String,
        imageName:String,
})

const userDataCheck = mongoose.model('userData', signupSchema)

module.exports = userDataCheck
