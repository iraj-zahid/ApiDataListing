const express = require("express")
const router = express.Router()


const {create, read} = require("../controllers/reviewsController")  

router.post('/create', create)
router.get('/read', read)

module.exports = router