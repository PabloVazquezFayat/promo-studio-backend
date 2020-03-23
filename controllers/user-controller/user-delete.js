const User = require('../../models/User');

module.exports = async (req, res, next)=> {

    try{

        let user = await User.findByIdAndDelete({_id: req.body.id});

        res.status(200).json({message: `${user.name} has been deleted`});

    }catch(error){
        next(error)
    }

}