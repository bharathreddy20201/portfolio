import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import validation from "./validation";
const Contact = ({submitForm}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)

    
        const [data,setData] =useState({
        user_name:"",
        message:"", 
        user_email:"",
    } );
    
    const [errors,setErrors]= useState({});


    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
     };
     
  



    const sendEmail = (e) => {
        e.preventDefault();
        setErrors(validation(data));
    emailjs
      .sendForm(
        "service_hcggcpe",
        "template_2yx1qyw",
        form.current,
        "x5n08OKV7lrvfM-10"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          alert( done && 'Thank You')
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name" onChange={changeHandler}/>
          {errors.user_name && <span className="error">{errors.user_name}</span>}
          <input type="email" name="user_email" className="user" placeholder="Email" onChange={changeHandler}/>
          {errors.user_email && <span className="error">{errors.user_email}</span>}
          <input type='text' name="message" className="user" placeholder="Message" onChange={changeHandler}/>
          {errors.message && <span className="error">{errors.message}</span>}

          <input type="submit" value="Send" className="button"/>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
