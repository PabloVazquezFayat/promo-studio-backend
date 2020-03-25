const Port = require('../../models/Port');

module.exports = async (req, res, next)=> {

    try{    

       let port = await Port.findById({_id: req.params.id});

       if(!port){
           res.status(404).json({message: 'Port does not exist'});
           return;
       }
       
       res.status(200).json(port);

    }catch(error){
        next(error)
    }

}