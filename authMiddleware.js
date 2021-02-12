const jwt = require("jsonwebtoken");

const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "secret";

module.exports = function(req, res, next) {
    if(req.url == "/login" && req.method == "POST") {
        
    }
}