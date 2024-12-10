const Role = require('../../models/role.model');
const User = require('../../models/user.model');

// [get] /roles
module.exports.index =async (req,res)=>{
    try{
        const data = await Role.find();
        res.status(200).json({
            data : data
        })
    }catch(error){
        res.status(500).json({
            message : error
        })
    }
}
// [put] /roles/update/:id
module.exports.update = async (req,res)=>{
    try{
        const id = req.params.id;
        

        await Role.updateOne({_id :id},req.body);
        const data = await Role.find({_id : id});
        res.status(200).json({
            data : data
        })
    }catch(error){
        res.status(500).json({
            message : error
        })
    }
}

module.exports.checkRole =async (req,res)=>{
    try{
        const id = req.params.id;
        const data = await Role.findOne({_id : id});
        if(data){
        res.status(200).json({
            data : data
        })
        return
    }
    res.status(404).json({
        message : "Không tìm thấy"
    })
    }
    catch(erorr){
        res.status(500).json(erorr)
    }
}


module.exports.checkRoleToken =async (req,res)=>{
    try{
       
        const token = req.params.token;
       
        // Tìm người dùng theo token
        const dataUser = await User.findOne({token : token});

        const roleUser = dataUser.role_id;
        // Tìm role
        const dataRole = await Role.findOne({_id : roleUser});

        if(dataRole){
        res.status(200).json({
            data : dataRole
        })
        return
    }
    res.status(404).json({
        message : "Không tìm thấy"
    })
    }
    catch(erorr){
        res.status(500).json(erorr)
    }
}
