import React from 'react'
import { useContext } from "react";
// import imgage from '../../public/banner'
import image from '../assets/banner.png'
import img2 from '../assets/second.jpg'
import { AuthContext } from '../context/auth';

const Home = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <div>
      <div className="bg" style={{ height: "400px", backgroundColor:"#001529",color:"white" ,display: "flex"}}>
        <div style={{flexBasis:" 50%", display: 'flex' ,flexDirection:" column", justifyContent:" center", alignItem: "center"}}>
          <p className='mx-4' style={{fontSize: "100px", textShadow:" 4px 6px 4px rgba(0,0,0,0.25)" ,colo: "white"}}>Anika <sub style={{fontSize:"15px"}}></sub></p>
          <p className='mx-4' style={{fontSize: "30px"}}><i>Be Fearless...</i></p>
        </div>
        <div>
          <img src={image} style={{height: "100%",display: "flex", justifyContent: 'end'}} />
        </div>
      </div>
      <div style={{height: "400px", display: "flex", margin:0,padding:0}} className="container">
        <div style={{flexBasis: "50%"}}>
          <img src={img2} style={{height:"100%", borderRadius:" 0 60px 0 60px"}} />
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <p style={{marginTop: "20px"}}>Sexual harassment in the workplace is a form of sex discrimination that violates Title VII of the Civil Rights Act of 1964. It involves unwelcome sexual advances, requests for sexual favors, or other verbal or physical conduct of a sexual nature that creates an intimidating, hostile, or offensive work environment.</p>
          <p>
            Examples of sexual harassment in the workplace can include:
            <ul>
              <li>Unwanted touching or physical contact, such as touching someone's hair, back, or shoulders</li>
              <li>Making sexually suggestive comments or jokes, including sexual innuendos or comments about a person's body</li>
              <li>Displaying sexually explicit or offensive images or videos, such as suggestive posters</li>
              <li>Offering job benefits or promotions in exchange for sexual favors</li>
              <li>Making threats or engaging in retaliation against someone who refuses sexual advances or reports sexual harassment</li>
            </ul>
          </p>
        </div>
      </div>
      <h1 className="container my-4" style={{textAlign : 'center', marginTop:'20px'}}>About Us</h1>
      <p className="container">Anika has been designed to provide a safe and confidential space for women to report incidents of sexual harassment and seek support and resources. The Government of India (GoI) has enacted the Protection of Women from Sexual Harassment at Workplace (Prevention, Prohibition and Redressal) Act (the SH Act), 2013 with the objective to create a safe and secure workplace for women free from sexual harassment. This Act caters to women working both in organised and unorganised sector and establishes a redressal mechanism for the disposal of their complaints.</p>
      <p className="container">This Act is unique in its broad coverage which includes all women irrespective of their work status, whether working in organised or unorganised, public or private sectors, regardless of hierarchy. The domestic workers are also included within its ambit.It defines “sexual harassment at the workplace” in a comprehensive manner, to cover circumstances of implied or explicit promise or threat to a woman’s employment prospects or creation of hostile work environment or humiliating treatment, which can affect her health or safety.</p>
      <p className="container">So,ANIKA is an effort by us to provide a single window access to every woman, irrespective of her work status, whether working in organised or unorganised, private or public sector, to facilitate the registration of complaint related to sexual harassment. Any woman facing sexual harassment at workplace can register their complaint through this portal. Once a complaint is submitted to ANIKA, it will be directly sent to the concerned authority having jurisdiction to take action into the matter.</p>
      <p style={{backgroundColor: 'black', height:'30px', padding: 0, margin: 0, color:'white', textAlign: 'center'}}>By:- SQUAD-7</p>
    </div>
  )
}

export default Home
  