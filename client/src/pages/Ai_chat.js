import React, { useState } from 'react'
import axios from "axios"
import Userchat from '../components/Userchat'
import Botchat from '../components/Botchat'
import { useEffect } from 'react'
axios.defaults.baseURL = "http://localhost:8000/api"
const Ai_chat = () => {
    // let openai=null;
    // let resp = [];
    const [resp,setResp] = useState([]);;
    // let i=0;

    useEffect(() => {
        // const config = new Configuration({
        //     apiKey: "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"
        addresp();
    }, []);
    //     openai = new OpenAIApi(config);
    // });
    // useEffect
    // event.preventDefault(); 
    const addresp = async()=>{
        // resp.concat({user:"hi",bot:"hello"});
        setResp(resp.concat({user:"hi",bot:"I am Anika the Bot and I have hear to help you"}))
    }
    const [prompt, setPrompt] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(prompt)
        // console.log(openai)
        // // const response =await fetch (openai.createCompletion({
        //     model: "text-davinci-003",
        //     prompt: prompt,
        //     max_tokens: 2048,
        //     temperature: 1
        // }))
        // console.log(response);
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const { data } = await axios.post("/aichat", { prompt }, config)
        console.log(data.choices[0].text);
        // if (resp.length == 0) {
            // resp.push({ user: prompt, bot: data.choices[0].text })
        // }
        // else {
            setResp(resp.concat({ user: prompt, bot: data.choices[0].text }));
        // }
        console.log(resp)
    }
    return (
        <>
            <div className="container" style={{position:'relative',left:"-50px"}}>
                {
                    resp.map((element) => {
                        return <div>
                            <Userchat text={element.user} />
                            <Botchat text={element.bot} />
                        </div>
                    })
                }
            </div>

            <div className='container position-absolute bottom-0' >
                <form>
                    <div className="mb-3" >
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter You question here</label>
                        <input type="text" placeholder='Enter Question' onChange={(event) => setPrompt(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Ai_chat
