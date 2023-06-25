const association = require('../controllers/product.controller.js');

const routers =  require("express").Router();

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
  })
  
const upload = multer({ storage: storage })

routers.post("/product/add",upload.single('imageUrl'),association.addProduct);    
routers.get("/product/findall",association.findall);    


module.exports = routers;