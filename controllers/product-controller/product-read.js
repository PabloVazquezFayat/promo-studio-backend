const Product = require('../../models/Product');

module.exports = async (req, res, next)=> {

    try{

        const filter = {
            productID: req.body.productID,
            shipCode: req.body.shipCode,
            sailingDate: req.body.sailingDate
        };
        
       let products = await Product.find(filter);
       res.status(200).json(products);

    }catch(error){
        next(error)
    }

}