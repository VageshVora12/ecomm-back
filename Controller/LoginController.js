import { reset } from "nodemon";
import User from "../Model/UserModel";
export const Login = async (req,res)=>{
    const{email, password}=req.body;
    let UserLogin = await User.find({email:email,password:password});
    if(UserLogin.length>0){
        req.session._id = UserLogin[0]._id;
        console.log('session',req.session._id)
        res.cookie("Userid",UserLogin[0]._id);
        console.log('cookie',req.cookies);
        return res.status(200).json({
            data:UserLogin,
            message:"USER ADDED SUCCESSFULLY",
            status:true
        });
}      
    else{
       return res.status(422).json({
        data:"UserLogin",
        message:"USER NOT FOUND",
        status:false
       })
    }
reset();
}
