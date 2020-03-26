const CodeSnippet = require('../../models/CodeSnippet');

module.exports = async (req, res, next)=> {

    try{
        
        const data = {};

        for(const property in req.body) {
            data[property] = req.body[property];
        }

        await CodeSnippet.create(data);
        res.status(200).json({message: 'New code-snippet created'});

    }catch(error){
        next(error)
    }

}