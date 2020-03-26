const CodeSnippet = require('../../models/CodeSnippet');

module.exports = async (req, res, next)=> {

    try{    
       await CodeSnippet.findByIdAndDelete({_id: req.body.id});
       res.status(200).json({message: 'Code-snippet deleted'});
    }catch(error){
        next(error)
    }

}