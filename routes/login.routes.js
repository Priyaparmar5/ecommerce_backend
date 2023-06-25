const association = require('../controllers/login.controller.js');

const routers =  require("express").Router();

routers.post("/api/login",association.login);    

module.exports = routers;