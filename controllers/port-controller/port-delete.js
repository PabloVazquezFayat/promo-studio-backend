const Port = require('../../models/Port');

module.exports = async (req, res, next)=> {

    try{    
       await Port.findByIdAndDelete({_id: req.body.id});
       res.status(200).json({message: 'Port deleted'});
    }catch(error){
        next(error)
    }

}