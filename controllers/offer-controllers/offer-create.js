const Offer = require('../../models/Offer');

module.exports = async (req, res, next)=> {

    try{

        const data = {};

        for(const property in req.body) {
            data[property] = req.body[property];
        }

       await Offer.create(data);
       res.status(200).json({message: 'New offer created'});

    }catch(error){
        next(error)
    }

}