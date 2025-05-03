const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "BHUNGI"

function userMiddleware(req,res,next){
   //put token into the header
   const token = req.headers.token;
   //now we have to verify the token it's a paert of jwt
   const decoded = jwt.verify(token ,JWT_USER_PASSWORD);

   if(decoded){
    req.userId = decoded.id;
    next();
   }
   else{
    res.status(404).json({
        message: "You are not Sign-in"
    })
   }
}

module.exports = {
    userMiddleware
}