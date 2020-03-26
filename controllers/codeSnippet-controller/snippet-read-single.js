const CodeSnippet = require('../../models/CodeSnippet');

module.exports = async (req, res, next)=> {

    try{    

       let codeSnippet = await CodeSnippet.findById({_id: req.params.id});

       if(!codeSnippet){
           res.status(404).json({message: 'Code-snippet does not exist'});
           return;
       }
       
       res.status(200).json(codeSnippet);

    }catch(error){
        next(error)
    }

}