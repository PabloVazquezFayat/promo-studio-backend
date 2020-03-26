const Offer = require('../../models/Offer');

module.exports = async (req, res, next)=> {

    try{    

        let offer = await Offer.findById({_id: req.params.id})
            .populate({path: 'combinableOffers'});

        res.status(200).json(offer ? offer : {message: 'Offer does not exist', error: offer});

    }catch(error){
        next(error)
    }

}