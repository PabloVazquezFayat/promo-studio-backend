const adminPermission = (req, res, next)=> {

    if(req.body.permissions.admin === true){
        next();
    }else{  
        res.status(401).json({message: 'You are not allowed to perform this action, please check with your admin.'});
    }

}

const createPermission = (req, res, next)=> {

    if(req.body.permissions.create === true){
        next();
    }else{
        res.status(401).json({message: 'You are not allowed to perform this action, please check with your admin.'})
    }

}

const readPermission = (req, res, next)=> {

    if(req.body.permissions.read === true){
        next();
    }else{
        res.status(401).json({message: 'You are not allowed to perform this action, please check with your admin.'})
    }

}

const updatePermission = (req, res, next)=> {

    if(req.body.permissions.update === true){
        next();
    }else{
        res.status(401).json({message: 'You are not allowed to perform this action, please check with your admin.'})
    }

}

const deletePermission = (req, res, next)=> {

    if(req.body.permissions.delete === true){
        next();
    }else{
        res.status(401).json({message: 'You are not allowed to perform this action, please check with your admin.'})
    }

}

module.exports = {
    adminPermission:  adminPermission,
    createPermission: createPermission,
    readPermission:   readPermission, 
    updatePermission: updatePermission, 
    deletePermission: deletePermission
}