async function basicComponent(req, res, next){
    try{

        const data = {
            greet: 'Hello World',
            intro: 'I\'m the promo API',
            outro: 'Peace out peeps!'
        }

        res.status(200).json(data);
    }catch(error){
        next(error);
    }
}

module.exports = basicComponent;
