import { useState } from "react";
import "./contact.scss";
import axios from "axios";
// import { SettingsRemoteSharp } from "@material-ui/icons";
export default function Contact() {
  const [message, setMessage] = useState({message:"",email:""});
  const [res,setRes]=useState("")
  const onchange=(e)=>{
    setMessage({...message,[e.target.name]:e.target.value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
  const res=await  axios.post('https://portback.herokuapp.com/',message)
  setRes(res.data)
  
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form >
          <input type="email" placeholder="Email" name="email" onChange={onchange} />
          <textarea placeholder="Message" name="message" onChange={onchange}></textarea>
          <button type="submit" onClick={handleSubmit}>Send</button>
          <span>{res}</span>
        </form>
      </div>
    </div>
  );
}
