const CodeSnippet = require('../../models/CodeSnippet');

module.exports = async (req, res, next)=> {

    try{

        const data = {};

        for(const property in req.body) {
            if(property !== "id"){
                data[property] = req.body[property];
            }
        }

        await CodeSnippet.findByIdAndUpdate({_id: req.body.id}, data);
        res.status(200).json({message: 'Code-snippet updated'});

    }catch(error){
        next(error)
    }

}