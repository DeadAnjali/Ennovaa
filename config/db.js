const mongoose=require("mongoose");
const dbConnect= async () => {
    try{
        await mongoose.connect("mongodb+srv://bloguser:e56sv1KnTkbJDna7@blog.qdafngq.mongodb.net/?retryWrites=true&w=majority",
        {
            useCreateIndex:true,
            useFindAndModify: true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Connected to database");
    }
    catch(error){
        console.log(`Error`);
    }
}
module.exports=dbConnect;
