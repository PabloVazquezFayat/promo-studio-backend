const Experience = require('../../models/Experience');

module.exports = async (req, res, next)=> {

    try{

        const data = {};

        for(const property in req.body) {
            data[property] = req.body[property];
        }

        await Experience.create(data);
        res.status(200).json({message: 'new experience created'});

    }catch(error){
        next(error)
    }

}