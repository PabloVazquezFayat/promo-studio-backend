const Market = require('../../models/Market');

module.exports = async (req, res, next)=> {

    try{    

       let market = await Market.findById({_id: req.params.id});

       if(!market){
           res.status(404).json({message: 'Market does not exist'});
           return;
       }
       
       res.status(200).json(market);

    }catch(error){
        next(error)
    }

}