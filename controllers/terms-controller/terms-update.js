const Terms = require('../../models/Terms');

module.exports = async (req, res, next)=> {

    try{

        const data = {};

        for(const property in req.body) {
            if(property !== "id"){
                data[property] = req.body[property];
            }
        }

        await Terms.findByIdAndUpdate({_id: req.body.id}, data);
        res.status(200).json({message: 'Terms updated'});

    }catch(error){
        next(error)
    }

}