const CodeSnippet = require('../../models/CodeSnippet');

module.exports = async (req, res, next)=> {

    try{    

       let codeSnippets = await CodeSnippet.find();
       res.status(200).json(codeSnippets.length > 0 ? codeSnippets : {message: 'There are no existing code-snippets'});

    }catch(error){
        next(error)
    }

}