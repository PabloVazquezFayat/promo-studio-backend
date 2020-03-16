const Offer = require('../../models/Offer');

module.exports = async (req, res, next)=> {

    try{    

       let offer = await Offer.findById({_id: req.params.id});

       if(!offer){
           res.status(404).json({message: 'Offer does not exist'});
           return;
       }
       
       res.status(200).json(offer);

    }catch(error){
        next(error)
    }

}