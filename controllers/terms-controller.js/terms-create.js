const Terms = require('../../models/Terms');

module.exports = async (req, res, next)=> {

    try{

        const data = {};

        for(const property in req.body) {
            data[property] = req.body[property];
        }

        await Terms.create(data);
        res.status(200).json({message: 'New terms created'});

    }catch(error){
        next(error)
    }

}