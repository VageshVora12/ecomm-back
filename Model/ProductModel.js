import mongoose from "mongoose";
const {Schema} =  mongoose;
const schema = new Schema({
    name :{
        type : String
    },
    detail :{
        type: String
    },
    price :{
        type: Number
    },
    quantity :{
        type : Number
    },
    image:{
        type:String
    },
    categoryname:{
        type : Schema.Types.ObjectId,ref:"Category"
    }
});

const Product = mongoose.model('Product',schema);
export default Product;
