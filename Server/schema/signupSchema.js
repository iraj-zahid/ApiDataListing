const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
        name:String,
        email:{ type: String,
                required: true,
                unique: true,
                trim: true,
                lowercase: true,
                match: /^[a-zA-Z0-9._%+-]+@gmail\.com$/},
        password:{type: String,
                required: true,
                minlength: 6, },
        imageName:String,
})

const userDataCheck = mongoose.model('userData', signupSchema)

module.exports = userDataCheck
