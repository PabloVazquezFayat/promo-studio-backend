const Terms = require('../../models/Terms');

module.exports = async (req, res, next)=> {

    try{    

       let terms = await Terms.find();
       res.status(200).json(terms.length > 0 ? terms : {message: 'There are no existing terms'});

    }catch(error){
        next(error)
    }

}