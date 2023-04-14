import mongoose from "mongoose";
const { Schema } = mongoose;

const complaintSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true,
    },
    number:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    designation:{
        type:String,
        default:"----"
    },
    aadhar:{
        type:Number,
        required:true,
        unique:true,
    },
    organization:{
        type:String,
        default:"----"
    },
    accusedname:{
        type:String,
        trim:true,
        required:true
    },
    accusedDept:{
        type:String,
        required:true
    },
    briefDec:{
        type:String,
        required:true
    },
    progress:{
        type:Number,
        default:0
    }
},
    { timestamps: true }
);

export default mongoose.model("Complaint",complaintSchema);
