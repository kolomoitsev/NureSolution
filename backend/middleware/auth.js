const jwt = require('jsonwebtoken');
const secret = 'kolomoitsev228';

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');

    if(!authHeader){
        res.status(401).json({message: "Token not provided"});
    }

    const token = authHeader.replace('Bearer ', '')
    try{
        jwt.verify(token, secret);
    }
    catch (e) {
        if(e instanceof jwt.JsonWebTokenError){
            res.status(401).json({message: 'Invalid token'})
        }
    }

    next();
}