import Category from "../Model/CategoryModel";
export const CategoryMain = async(req,res)=>{
    const{name,alias} = req.body;
    let CategorySave = new Category({name:name,alias:alias})
     let CategorySaved = await CategorySave.save();
     return res.status(200).json({
         data:CategorySaved,
         message:"CATEGORY ENTER SUCCESSFULLY",
         status:true
    })
}
export const CategoryList = async(req,res)=>{
    let categoryInfo = await Category.find({});
    return res.status(200).json({
        data:categoryInfo,
        message: "CATEGORY LIST",
        status:"true"
    })
}  