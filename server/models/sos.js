import mongoose from "mongoose";
const { Schema } = mongoose;

const sosSchema = new Schema({
    email:{
        type: String,
        trim: true,
        required: true,
    },
    contact1:{
        type:Number,
        required:true,
    },
    contact2:{
        type:Number,
        required:true,
    },
    messageDetails:{
        type:String,
        trim:true,
        required:true
    },
},
    { timestamps: true }
);

export default mongoose.model("Sos",sosSchema);
