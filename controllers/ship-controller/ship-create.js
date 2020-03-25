const Ship = require('../../models/Ship');

module.exports = async (req, res, next)=> {

    try{

        const data = {};

        for(const property in req.body) {
            data[property] = req.body[property];
        }

        await Ship.create(data);
        res.status(200).json({message: 'New ship created'});

    }catch(error){
        next(error)
    }

}