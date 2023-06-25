const db = require("../models");
const Cart = db.Cart;
const Product = db.Product;
const CartProduct = db.Cart_Product;
const jwt = require("jsonwebtoken");

const add = async (req, res) => {
  const {
    cartId,
    imageUrl,
    customerId,
    name,
    description,
    productId,
    price,
    quantity,
  } = req.body;
  console.log(req.body, "bodyy");
  try {
  
    const product = await Product.findOne({ where: {id: productId } });
    console.log(product, "product..");
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const result = await db.sequelize.transaction(async (t) => {
      const [cart] = await Cart.findOrCreate({
        where: { customerId },
        transaction: t,
      });

      const existingProduct = await CartProduct.findOne({
        where: {
          cartId: cart.id,
          productId,
        },
        transaction: t,
      });
      if (existingProduct) {
        existingProduct.quantity =
          parseInt(existingProduct.quantity) + parseInt(quantity);
          existingProduct.price = product.price * existingProduct.quantity;

        await existingProduct.save({ transaction: t });
      } else {
        await CartProduct.create(
          {
            cartId: cart.id,
            productId,
            name,
            imageUrl,
            description,
            quantity,
            price: product.price * quantity,
            
          },
          { transaction: t }
        );
      }

      return existingProduct;
    });

    return res.status(200).json({ success: "Product added to cart" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const find = async (req, res) => {
  try {
    const {id}  = req.params;
    console.log(id,"cartpro id..");
    const cartProduct = await CartProduct.findAll({
     where: { cartId :id},
    });

    console.log(cartProduct, "cartproducts");

    return res.status(200).json(cartProduct);  
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  console.log(id, "idds");
  try {
    const cartProduct = await CartProduct.findOne({ where: { productId: id } });
    console.log(cartProduct, "cartproooo");
    if (!cartProduct) {
      return res.status(404).json({ message: "Cart product not found" });
    }

    await cartProduct.destroy();

    res.json({ message: "Product removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateCartProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id, "idds");

  const { quantity, price } = req.body;
  try {
    const cartProduct = await CartProduct.findOne({ where: { productId: id } });
    console.log(cartProduct, "cp..");
    if (!cartProduct) {
      return res.status(404).json({ error: "Cart product not found" });
    }

    cartProduct.quantity = quantity;
    cartProduct.price = price;
    await cartProduct.save();

    return res
      .status(200)
      .json({ message: "Cart product updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const cartRemoveall = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findOne({ where: { id } });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    await CartProduct.destroy({ where: { cartId: cart.id } });

    return res.status(200).json({ message: "Cart products removed successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  add,
  find,
  remove,
  updateCartProduct,
  cartRemoveall
};
