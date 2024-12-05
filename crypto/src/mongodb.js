const mongoose=require("mongoose")


mongoose.connect("mongodb://localhost:27017/crypto")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const collection=new mongoose.model("Collection1",logInSchema)

module.exports=collection