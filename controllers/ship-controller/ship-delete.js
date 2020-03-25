const Ship = require('../../models/Ship');

module.exports = async (req, res, next)=> {

    try{    
       await Ship.findByIdAndDelete({_id: req.body.id});
       res.status(200).json({message: 'Ship deleted'});
    }catch(error){
        next(error)
    }

}