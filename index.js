const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
//const verifyToken = require('./middlewares/authMiddleware');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
// app.get('/api/protected', verifyToken, (req, res) => {
//   res.json({ message: 'Protected route accessed successfully' });
// });

require('dotenv').config()
const PORT=process.env.SERVER_PORT | 3001;

const router = require("./routes/customer.routes");
const login = require("./routes/login.routes");
const product = require("./routes/product.routes");
const cart = require("./routes/cart.routes");
const order = require("./routes/order.routes");


app.use("/api/", router);
app.use(login);
app.use(product);
app.use(cart);
app.use(order);


app.use(express.static(`${__dirname}/public/uploads`));
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "public/uploads", ));
});
app.listen(PORT, () => {
  console.log(`server is running ${PORT}...`);
});
