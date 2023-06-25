    const association = require('../controllers/order.controller.js');

    const router =  require("express").Router();

    router.post("/order/address/add",association.address_add);    
    router.post("/order/add",association.add); 
    router.post("/order_product/add",association.confirm_order);    
    router.get("/order/findall/:id",association.findall);   
    router.get("/order/find/:id",association.order_findall);    
    router.get("/previousOrder/:id",association.getPreviousOrderProducts);    
    router.get("/address/:id",association.getAddress);    
    router.put("/address/update/:id",association.updateAddress);    

    module.exports = router;