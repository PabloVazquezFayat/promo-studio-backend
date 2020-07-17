const Promo = require('../../models/Promo');

module.exports = async (req, res, next)=> {

    try{

        const data = {};

        for(const property in req.body) {
            data[property] = req.body[property];
        }

       await Promo.create(data);
       res.status(200).json({message: 'New Promo created'});

    }catch(error){
        next(error)
    }

}