const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');
const User = require('../../models/User');

module.exports = async (req, res, next)=> {

    try{

        let user = await User.findOne({email: req.body.email});

        if(!user){
            return res.status(401).json({ auth: false, message: 'Incorrect email or password'});
        }

        if(!bcrypt.compareSync(req.body.password, user.password)){
            return res.status(401).json({false: false, message: 'Incorrect email or password'});
        }

        let token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET, {expiresIn: 86400});
        
        res.status(200).json({auth: true, token: token});

    }catch(error){
        next(error)
    }

}