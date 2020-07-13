const Port = require('../../models/Port');

module.exports = async (req, res, next)=> {

    try{    

       let ports = await Port.find();
       let cleanedPorts =  ports.map((port)=>{
            return {name: port.name, code: port.code}
       });
       res.status(200).json(cleanedPorts);

    }catch(error){
        next(error)
    }

}