const Offer = require('../../models/Offer');

module.exports = async (req, res, next)=> {

    try{    
       await Offer.findByIdAndDelete({_id: req.body.id});
       res.status(200).json({message: 'offer deleted'});
    }catch(error){
        next(error)
    }

}