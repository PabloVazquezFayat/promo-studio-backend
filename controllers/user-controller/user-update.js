const User = require('../../models/User');

module.exports = async (req, res, next)=> {

    try{

        const data = {};

        for(const property in req.body) {
            if(property !== "id"){
                data[property] = req.body[property];
            }
        }

        let user = await User.findByIdAndUpdate({_id: req.body.id}, data);

        res.status(200).json({message: `${user.name} has been updated`});

    }catch(error){
        next(error)
    }

}