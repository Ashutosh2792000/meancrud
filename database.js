const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://ashu:123@cluster0.pvyycyy.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connetion succesfulll");
}).catch((e)=>{
    console.log(e);
})


const Schema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Usermodel = mongoose.model("User",Schema);

module.exports =Usermodel;


