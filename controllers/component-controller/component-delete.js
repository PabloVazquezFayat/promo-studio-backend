const Component = require('../../models/Component');

module.exports = async (req, res, next)=> {

    try{    
        await Component.findByIdAndDelete({_id: req.body.id});
        res.status(200).json({message: 'Component deleted'});
     }catch(error){
         next(error)
     }

}