const Offer = require('../../models/Offer');

module.exports = async (req, res, next)=> {

    try{    

        const data = {};

        for(const property in req.body) {
            data[property] = req.body[property];
        }

        await Offer.findByIdAndUpdate({_id: req.body.id, data});
        res.status(200).json({message: 'new offer created'});

    }catch(error){
        next(error)
    }

}