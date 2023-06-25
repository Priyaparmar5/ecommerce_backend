// // middlewares/authMiddleware.js

// const jwt = require('jsonwebtoken');

// const verifyJWT = (req, res, next) => {
//   const token = req.headers["x-access-token"];
//   if (!token) {
//       res.send("We need a token, please give it to us next time");
//   } else {
//       jwt.verify(token, "secret", (err, decoded) => {
//           if (err) {
//               console.log(err);
//               res.json({ auth: false, message: "you are failed to authenticate"});
//           } else {
//             req.customerId = decoded.customerId;
//             console.log(decoded.customerId," req.customerId"); // Store the user ID in the request object
//             next();
//           }
//       });
//   }
// };


// module.exports = verifyJWT;
