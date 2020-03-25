const Ship = require('../../models/Ship');

module.exports = async (req, res, next)=> {

    try{    

       let ship = await Ship.findById({_id: req.params.id});

       if(!ship){
           res.status(404).json({message: 'Ship does not exist'});
           return;
       }
       
       res.status(200).json(ship);

    }catch(error){
        next(error)
    }

}