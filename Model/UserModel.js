import mongoose from "mongoose";
const {Schema} =  mongoose;
const schema = new Schema({
    name :{
        type : String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});

const User = mongoose.model('User',schema);
export default User
