const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./config/db")


app.use(cors())
app.use(express.json())
app.use('/public/images', express.static("public/images"))


db.connection
   .once('open', () => console.log("MongoDB is connected"))
   .on('error', (err) => console.log(`Error in db ${err}`))

const PORT = 5000
 app.listen(PORT, function(){
    console.log(`server running on port ${PORT}`)
 })

app.use('/apis', require('./rootRoute'))
