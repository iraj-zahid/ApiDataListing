const express = require("express")
const router = express.Router()
const multer = require("multer")


const {create, read} = require("../controllers/productsController")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

router.post('/create',upload.array('image',10), create)
router.get('/read', read)

module.exports = router