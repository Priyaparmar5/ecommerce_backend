    const association = require('../controllers/customer.controller.js');
    const Validator = require('../middlewares/validators.js')


    const router =  require("express").Router();
    router.post("/customer/add",association.add);    
 //   router.post("/customer/add",Validator('register'),association.add);    
    router.get("/customer/checkemail",association.checkEmail);    

    module.exports = router;