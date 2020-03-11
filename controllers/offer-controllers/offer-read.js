const Offer = require('../../models/Offer');

module.exports = async (req, res, next)=> {

    try{    

       let offers = await Offer.find();
       res.status(200).json({data: offers});

    }catch(error){
        next(error)
    }

}