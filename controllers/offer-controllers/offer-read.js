const Offer = require('../../models/Offer');

module.exports = async (req, res, next)=> {

    try{    

       let offers = await Offer.find();
       res.status(200).json(offers.length > 0 ? offers : {message: 'There are no existing offers'});

    }catch(error){
        next(error)
    }

}