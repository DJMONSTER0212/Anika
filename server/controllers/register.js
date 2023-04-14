import Complaint from "../models/complaint";
const email = "defaultemail@gmail.com"
exports.register = async(req,res)=>{
    console.log("Hello")
    console.log(req.body);
    const {name,number,designation,aadhar,organization,accusedOrg,accusedname,accusedDept,briefDec }= req.body;
    // console.log(name, number, designation, aadhar, organization, accusedOrg, accusedname, accusedDept, briefDec);

    const complaint = await Complaint.create({
            name,
            number,
            email,
            designation,
            aadhar,
            organization,
            accusedname,
            accusedDept,
            accusedOrg,
            briefDec
    });
    if(complaint){
        console.log(complaint);
    }
}