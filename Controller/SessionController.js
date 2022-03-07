
export const setSession =(req,res)=>{
    // res.send('Set Session')
req.session.name = req.params.name;
console.log(req.params.name)
return res.status(200).json({
    name:req.session.name,
    message:"SESSION STARTED",
    status:true
})
}


export const logutfun = (req, res)=>{
    console.log("GGWPPP")
    req.session.destroy();
    res.clearCookie('Userid');
    return res.status(200).json({
        message:"Destroyed Session",
        status:true
    });
}
export const getSession =(req,res)=>{
    // req.session.name = req.param.name;
    return res.status(200).json({
        name:req.session.name,
        // message:"SESSION STARTED",
        status:true
    });
    }


    export const destroySession =(req,res)=>{
        // req.session.name = req.param.name;
        req.session.destroy(function(err){
            return res.status(200).json({
                message:"SESSION DESTROYED",
                status:true
            });

        })
        
        }