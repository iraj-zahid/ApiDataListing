const mongoose = require('mongoose')

const reviewsSchema = new mongoose.Schema({
        name:String,
        review:String,
})

const reviewCheck = mongoose.model('reviews', reviewsSchema)

module.exports = reviewCheck