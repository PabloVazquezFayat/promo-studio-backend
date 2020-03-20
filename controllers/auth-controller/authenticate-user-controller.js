const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

module.exports = async (req, res, next)=> {

    try{

        let token = req.headers['x-access-token'] || req.headers['authorization'];

        if(token.indexOf('Bearer ') !== -1){
            token = token.slice(7, token.length);
        }

        if(token && jwt.verify(token, process.env.TOKEN_SECRET)){
            next();
            return;
        }else{
            return res.status(401).json({auth: false, message: 'Authentication failed'});
        }

    }catch(error){
        next(error)
    }

}