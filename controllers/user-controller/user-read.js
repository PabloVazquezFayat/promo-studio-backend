const User = require('../../models/User');

module.exports = async (req, res, next)=> {

    try{

        let users = await User.find();

        res.status(200).json(users);

    }catch(error){
        next(error)
    }

}