const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const Customer = db.Customer;

const login = async (req, res) => {
  try {
    const { email, password } = req.body.data;
    const user = await Customer.findOne({ where: { email } });
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (user && passwordMatch) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        "secret"
      );
      res.json({
        token: token,id:user.id
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  login,
};
