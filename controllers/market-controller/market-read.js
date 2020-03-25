const Market = require('../../models/Market');

module.exports = async (req, res, next)=> {

    try{    

       let markets = await Market.find();
       res.status(200).json(markets.length > 0 ? markets : {message: 'There are no existing markets'});

    }catch(error){
        next(error)
    }

}