const Promo = require('../../models/Promo');

module.exports = async (req, res, next)=> {

    try{    

        let promo = await Promo.findById({_id: req.params.id})
            .populate({path: 'combinablePromos'});

        res.status(200).json(promo ? promo : {message: 'Promo does not exist', error: offer});

    }catch(error){
        next(error)
    }

}