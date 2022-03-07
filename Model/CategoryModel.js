import mongoose from "mongoose";
const {Schema} =  mongoose;
const schema = new Schema({
    name :{
        type : String
    },
    alias:{
        type:String
    }
});
const Category = mongoose.model('Category',schema);
export default Category;