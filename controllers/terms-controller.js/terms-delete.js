const Terms = require('../../models/Terms');

module.exports = async (req, res, next)=> {

    try{    
       await Terms.findByIdAndDelete({_id: req.body.id});
       res.status(200).json({message: 'Terms deleted'});
    }catch(error){
        next(error)
    }

}