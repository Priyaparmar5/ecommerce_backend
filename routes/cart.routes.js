    const association = require('../controllers/cart.controller.js');

    const router =  require("express").Router();

    router.post("/cart/add",association.add);    
    router.get("/cart/findall/:id",association.find);    
    router.delete("/cart/remove/:id",association.remove);    
    router.put("/cart/update/:id",association.updateCartProduct);    
    router.delete("/cart/removeall/:id",association.cartRemoveall)

    module.exports = router;