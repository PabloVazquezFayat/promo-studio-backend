const Component = require('../../models/Component');

module.exports = async (req, res, next)=> {

    try{    

       let component = await Component.findById({_id: req.params.id});
       res.status(200).json(component ? component : {message: 'Component not found'});

    }catch(error){
        next(error)
    }

}