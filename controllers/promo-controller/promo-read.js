const Promo = require('../../models/Promo');

module.exports = async (req, res, next)=> {

    try{    

       let promos = await Promo.find();
       res.status(200).json(promos.length > 0 ? promos : {message: 'There are no existing promos'});

    }catch(error){
        next(error)
    }

}