const Promo = require('../../models/Promo');

module.exports = async (req, res, next)=> {

    try{    
       await Offer.findByIdAndDelete({_id: req.body.id});
       res.status(200).json({message: 'Promo deleted'});
    }catch(error){
        next(error)
    }

}