const Market = require('../../models/Market');

module.exports = async (req, res, next)=> {

    try{

        const data = {};

        for(const property in req.body) {
            if(property !== "id"){
                data[property] = req.body[property];
            }
        }

        await Market.findByIdAndUpdate({_id: req.body.id}, data);
        res.status(200).json({message: 'Market updated'});

    }catch(error){
        next(error)
    }

}