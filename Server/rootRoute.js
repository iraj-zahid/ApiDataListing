const express = require("express")
const router = express.Router()

router.use('/products', require('./routes/productsRoutes'))
router.use('/reviews', require('./routes/reviewsRoute'))

module.exports = router