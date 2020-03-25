const Ship = require('../../models/Ship');

module.exports = async (req, res, next)=> {

    try{    

       let ships = await Ship.find();
       res.status(200).json(ships.length > 0 ? ships : {message: 'There are no existing ships'});

    }catch(error){
        next(error)
    }

}