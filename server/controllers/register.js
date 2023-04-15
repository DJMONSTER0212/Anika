import Complaint from "../models/complaint";
// const email = "defaultemail@gmail.com"
exports.register = async(req,res)=>{
    console.log("Hello")
    console.log(req.body);
    const {name, number, email, designation,aadhar,organization,accusedOrg,accusedname,accusedDept,briefDec }= req.body;
    // console.log(name, number, designation, aadhar, organization, accusedOrg, accusedname, accusedDept, briefDec);

    try {
        const complaint = await new Complaint({
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
        }).save();
        return res.json({
            success: true,
            message: 'Complaint registered successfully.'
        });
    } catch (err) {
        console.log(err);
        return res.json({
            success: false,
            message: 'Error registering complaint.'
        });
    }
};