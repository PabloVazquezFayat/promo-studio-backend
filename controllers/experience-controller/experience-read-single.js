const Experience = require('../../models/Experience');

module.exports = async (req, res, next)=> {

    try{    

       let experience = await Experience.findById({_id: req.params.id});
       res.status(200).json(experience ? experience : {message: 'Experience not found'});

    }catch(error){
        next(error)
    }

}