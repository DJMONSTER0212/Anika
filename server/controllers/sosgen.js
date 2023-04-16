const { Navigator } = require("node-navigator");
const navigator = new Navigator();

const accountSid = "AC440de591d161d1300a08bdeadc9d7fc9";
const authToken = "230dc8ab0af7a2b15a281914ecd32778";
const client = require("twilio")(accountSid, authToken);
// var pos = null;
const successCallback = async(position) => {
    await console.log(position);
    //  pos = position;
    // await console.log(pos);
    const temp = `latitude :${position.latitude} longitude :${position.longitude}`
    await client.messages
        .create({ body: temp, from: "+19285175838", to: "+917974683312" })
        .then(message => console.log(message.sid));
};

const errorCallback = (error) => {
    console.log(error);
};
exports.sosgen = async(req,res)=>{
     await navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
     res.status(201).send("SOS send")
    // console.log(req);
    console.log("hi");
    // client.messages
    //     .create({ body: "What are you doing", from: "+19285175838", to: "+917974683312" })
    //     .then(message => console.log(message.sid));
    // res.send('Hello World!')

}