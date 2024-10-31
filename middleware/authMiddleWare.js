import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]

    if(!authHeader){
        console.log("Authorization header is missing")
        return res.status(403).json({message:"No Token Provided"})
    }
    const token = authHeader.startsWith("Bearer ") ? authHeader.substring(7, authHeader.length) : authHeader

    if (!token){
        console.log("Token is missing")
        return res.status(403).json({message:"Token is missing"})
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET || "SECRETANJAY" );
      console.log("Token Decode:", decode);
      req.user = decode;
      next()
    } catch (error) {
      console.log("Token verification failed:", error.message)
      return res.status(403).json({message:"Invalid Token"})

    }
    
}
