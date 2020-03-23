const bcrypt = require('bcryptjs');
const User = require('../../models/User');

module.exports = async (req, res, next)=> {

    try{

        const hashedPassword = bcrypt.hashSync(req.body.password, 8);

        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            permissions: {
                create: req.body.permissions.create,
                read:   req.body.permissions.read,
                update: req.body.permissions.update,
                delete: req.body.permissions.delete,
            }
        }

        let newUserCreated = await User.create(newUser);

        if(!newUserCreated){
            return res.status(500).send("There are was problem creating the user")
        }

        res.status(200).json({message: `${req.body.name} has been created`});

    }catch(error){
        next(error)
    }

}



