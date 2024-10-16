const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
        category:String,
        title:String,
        description:String,
        price:String,
        imageName:String,
        actualPrice:String,
        stock:String,
        rating:String,
})

const productCheck = mongoose.model('products', productSchema)

module.exports = productCheck
