const Market = require('../../models/Market');

module.exports = async (req, res, next)=> {

    try{    
       await Market.findByIdAndDelete({_id: req.body.id});
       res.status(200).json({message: 'Market deleted'});
    }catch(error){
        next(error)
    }

}