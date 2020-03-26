const Component = require('../../models/Component');

module.exports = async (req, res, next)=> {

    try{    

       let components = await Component.find();
       res.status(200).json(components.length > 0 ? components : {message: 'There are no existing components'});

    }catch(error){
        next(error)
    }

}