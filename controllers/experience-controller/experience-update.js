const Experience = require('../../models/Experience');

module.exports = async (req, res, next)=> {

    try{

        const data = {};

        for(const property in req.body) {
            if(property !== "id"){
                data[property] = req.body[property];
            }
        }

        await Experience.findByIdAndUpdate({_id: req.body.id}, data);
        res.status(200).json({message: 'Experience updated'});

    }catch(error){
        next(error)
    }

}