import Complaint from "../models/complaint";

export const Complaints = async (req,res)=>{
  try{
    const complaints = await Complaint.find().sort({progress:1})
    res.json(complaints)


  }catch(err){
    console.log(err);
  }
}