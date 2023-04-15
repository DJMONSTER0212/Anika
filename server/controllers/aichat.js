// const app = express()
const { Configuration, OpenAIApi } = require('openai')
const config = new Configuration({
    apiKey: "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"
});
const openai = new OpenAIApi(config);

exports.aichat = async(req,res)=>{
    console.log(req.body)
    const { prompt } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 1
    })
    console.log(response.data)
    // res.send(response)
    if(response){
        res.status(201).json(response.data)
    }
}