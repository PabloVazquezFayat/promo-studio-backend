const Offer = require('../../models/Offer');

module.exports = async (req, res, next)=> {

    try{    

        const data = {
            name: req.body.name,
            type: req.body.type,
            market: req.body.market,
            value: req.body.value,
            combinable: req.body.combinable,
            combinableOffers: req.body.combinableOffers,
            ships: req.body.ships,
            destinations: req.body.destinations,
            depaturePorts: req.body.depaturePorts,
            visitingPorts: req.body.visitingPorts,
            promoDates:req.body.promoDates,
            sailingDates: req.body.sailingDates,
            numberOfNights: req.body.numberOfNights,
        }

       await Offer.Save(data);
       res.status(200).json({message: 'new offer created'});

    }catch(error){
        next(error)
    }

}