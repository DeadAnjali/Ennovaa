//this middle ware is used with async error handler which is used in the error handling video
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode===200?500:res.statusCode;
    res.status(statusbar);
    res.json({
        message:err?.message,
        stack:process.env.NODE_ENV==='production'?null:err.stack,
    })
}

module.exports=errorHandler;