const Component = require('../../models/Component');

module.exports = async (req, res, next)=> {

    try{

        const data = {};

        for(const property in req.body) {
            data[property] = req.body[property];
        }

        await Component.create(data);
        res.status(200).json({message: 'New component created'});

    }catch(error){
        next(error)
    }

}