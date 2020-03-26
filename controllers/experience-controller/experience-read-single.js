const Experience = require('../../models/Experience');

module.exports = async (req, res, next)=> {

    try{

        let experience = await Experience.findById({_id: req.params.id})
            .populate({path: 'author', select: 'name'})
            .populate({path: 'editors', select: 'name'})
            .populate({path: 'codeSnippets'})
            .populate({path: 'components'});

        res.status(200).json(experience ? experience : {message: 'Experience not found', error: experience});

    }catch(error){
        next(error)
    }

}