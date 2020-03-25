const Port = require('../../models/Port');

module.exports = async (req, res, next)=> {

    try{
        
        const data = {};

        for(const property in req.body) {
            data[property] = req.body[property];
        }

        await Port.create(data);
        res.status(200).json({message: 'New port created'});

    }catch(error){
        next(error)
    }

}