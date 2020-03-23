const Experience = require('../../models/Experience');

module.exports = async (req, res, next)=> {

    try{    
        await Experience.findByIdAndDelete({_id: req.body.id});
        res.status(200).json({message: 'Experience deleted'});
     }catch(error){
         next(error)
     }

}