import mongoose from "mongoose";
const {Schema,model}=mongoose;

const PaymentSchema= new Schema({
    name:{type:String, required: true},
    to_user:{type:String, required: true},
    oid:{type:String, required: true},
    message:{type:String},
    amount:{type:Number, required: true},
    createdAt:{type:Date, default:Date.now},
    updatedAT:{type:Date, default:Date.now},
    done:{type: Boolean, default:false},
});

PaymentSchema.index({ to_user: 1 });
PaymentSchema.index({ to_user: 1, done: 1, amount: -1 });
PaymentSchema.index({ to_user: 1, done: 1, createdAt: -1 });

export default mongoose.models.Payment || model("Payment",PaymentSchema);
