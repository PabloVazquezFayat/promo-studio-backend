const Market = require('../../models/Market');

module.exports = async (req, res, next)=> {

    try{
        
        const data = {};

        for(const property in req.body) {
            data[property] = req.body[property];
        }

        await Market.create(data);
        res.status(200).json({message: 'New market created'});

    }catch(error){
        next(error)
    }

}