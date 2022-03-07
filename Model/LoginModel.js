import mongoose from "mongoose";
const {Schema} =  mongoose;
const schema = new Schema({

    email:{
        type:String
    },
    password:{
        type:String
    }
});

const LoginUser = mongoose.model('LoginUser',schema);
export default LoginUser;
