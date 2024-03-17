//this middle ware is used with async error handler which is used in the error handling video

const notFound=(req,res,next)=>{
    const err=new Error(`Not Found -${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode===200?500:res.statusCode;
    res.status(statusbar);
    res.json({
        message:err?.message,
        stack:process.env.NODE_ENV==='production'?null:err.stack,
    })
}

module.exports=errorHandler;
module.exports=notFound;

//import it in server file after the controllers
