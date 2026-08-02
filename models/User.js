import mongoose from "mongoose";
const {Schema,model}=mongoose;

const Userschema= new Schema({
    email:{type:String, required: true},
    name:{type:String},
    username:{type:String, required:true},
    profilepic:{type:String},
    coverpic:{type:String},
    bio:{type:String, maxlength: 500},
    razorpayid:{type:String},
    razorpaysecret:{type:String},
    createdAt:{type:Date ,default: Date.now},
    updatedAt:{type:Date ,default: Date.now},
});

export default mongoose.models.User || model("User",Userschema);