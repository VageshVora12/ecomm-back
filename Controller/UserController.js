import User from '../Model/UserModel';

export const UserMain = async(req,res)=>{
const{name,email,password} = req.body;
let UserSave = new User({name:name,email:email,password:password})
 let UserSaved = await UserSave.save();
 return res.status(200).json({
     data:UserSaved,
     message:"USER ENTER SUCCESSFULLY",
     status:true
 })
}
  
