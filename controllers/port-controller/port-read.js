const Port = require('../../models/Port');

module.exports = async (req, res, next)=> {

    try{    

       let ports = await Port.find();
       res.status(200).json(ports.length > 0 ? ports : {message: 'There are no existing ports'});

    }catch(error){
        next(error)
    }

}