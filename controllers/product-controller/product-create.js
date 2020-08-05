const Product = require('../../models/Product');

module.exports = async (req, res, next)=> {

    try{

        const data = req.body.products;
        await Product.insertMany(data);
        
        res.status(200).json({message: `${data.length} Products created`});

    }catch(error){
        next(error)
    }

}