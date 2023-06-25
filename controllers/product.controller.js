  const { QueryTypes } = require("sequelize");
  const db = require("../models");
  const Product = db.Product;
  const Cart = db.Cart;
    
  const addProduct = async (req, res) => {
    try {
      const img = req.file.filename;
   
      const user = await Product.create(
        {
          name:req.body.name,
          imageUrl:img,
          description:req.body.description,
          price:req.body.price,
          quantity: req.body.quantity
        },
      );

      res.status(200).json({ data: user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  const findall = async (req, res) => {
    try {
      let data = await Product.findAll();
    //  console.log(data,"dataa");
      res.status(200).json({ data: data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = {
    addProduct,
    findall
  };
