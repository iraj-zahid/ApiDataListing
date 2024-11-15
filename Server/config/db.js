const mongoose = require("mongoose")

// mongoose.connect('mongodb://localhost:27017/ecommerce')
mongoose.connect('mongodb+srv://irajzahid:IrajZahid@cluster0.4zwlm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

module.exports = mongoose
// IrajZahid  --> pass 