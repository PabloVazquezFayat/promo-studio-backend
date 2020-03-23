module.exports = async (req, res, next)=> {

    try{    

      res.render('builder', {message: "Component builder"});

    }catch(error){
        next(error);
    }

}