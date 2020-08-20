const Product = require('../../models/Product');

module.exports = async (req, res, next)=> {

    try{

        const filter = {};

        if(req.body.productID) filter.productID = req.body.productID;
        if(req.body.shipCode) filter.shipCode = req.body.shipCode;
        if(req.body.sailingDate) filter.sailingDate = req.body.sailingDate;
        
        let products = await Product.find(filter);

        let responseBody = {
            length: products.length,
            results: products
        }

        res.status(200).json(responseBody);

    }catch(error){
        next(error);
    }

}