const Offer = require('../../models/Offer');

module.exports = async (req, res, next)=> {

    try{
        
        console.log(req.body);

        const data = {};

        for(const property in req.body) {
            data[property] = req.body[property];
        }

        console.log(data);

       await Offer.create(data);
       res.status(200).json({message: 'new offer created'});

    }catch(error){
        next(error)
    }

}