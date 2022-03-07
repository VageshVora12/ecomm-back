import multer from "multer";
import Product from "../Model/ProductModel";

const storage = multer.diskStorage({
    destination: function (res,file,cb){
        cb(null,'assets');
    },
    filename: function(res,file,cb){
        cb(null, file.fieldname + '-'+Date.now()+'.jpg');
    }
});

export const ProductMain = async(req,res)=>{

    const uploadImages = multer({ storage:storage}).single('image');

    uploadImages(req,res,async function(err){
// console.log(req.body,req.file);
    const filename = req.file.filename;
    const{name,detail,price,quantity,category} = req.body;
    let ProductSave = new Product({name:name,detail:detail,price:price,quantity:quantity,image:filename,categoryname
        :category})
     let ProductSaved = await ProductSave.save();
     return res.status(200).json({
         data:ProductSaved,
         message:"PRODUCT ENTER SUCCESSFULLY",
         status:true
    })
    })    
}   

export const ProductList =async(req,res)=>{

// const {cateId,sortby} = req.body;
// var prodList;
// if(cateId.length>0){
//     prodList = await Product.find({categoryname:{$in:cateId}}).populate('categoryname').sort({price:sortby})
// }
// else{
//     prodList = await Product.find({}).populate('categoryname').sort({price:sortby});
// }

//     // const productList = await Product.find({}).populate('categoryname');
//     // console.log(productList);
//     var host = req.get('host')
//     console.log(host);
//     return res.status(200).json({
//         data:prodList,
//         imgpath:'http://'+host+'/assets/',
//         message:"PRODUCT LISTED SUCCESSFULLY",
//         status:"true"
//     })
    var host = req.get('host')

    let prodInfo = await Product.find({});
    return res.status(200).json({
        data:prodInfo,
        message: "PRODUCT LIST",
        imgpath:'http://'+host+'/assets/',
        status:"true"
    })

}




