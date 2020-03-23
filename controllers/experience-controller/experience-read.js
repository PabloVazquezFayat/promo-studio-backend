const Experience = require('../../models/Experience');

module.exports = async (req, res, next)=> {

    try{    

       let experiences = await Experience.find();
       res.status(200).json(experiences.length > 0 ? experiences : {message: 'There are no existing experiences'});

    }catch(error){
        next(error)
    }

}