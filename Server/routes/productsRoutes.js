const express = require("express")
const router = express.Router()
const multer = require("multer")


const {create, read,update, deleteProduct} = require("../controllers/productsController")

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
router.post('/updateproduct', upload.array('image', 10), update)
router.get('/read', read)
router.route('/delete').post(deleteProduct)

module.exports = router