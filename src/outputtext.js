import React,{useState} from 'react'
import "./textform.css"
export default function TextForm(props) {
  const UpperClick =()=>{
    console.log("UpperClick");

  };
  const [text,setText]=useState("Enter text here...");  // text is the variable we are using to store the value
                                                        // and setText is the function to xhange the value 
                                                        // setText("ajdgaobdiugbjg"); changes the value of text to ajdgaobdiugbjg
  return (
    <>
    <div class="form-group">
    <label htmlFor="exampleFormControlTextarea1" className="heading">{props.heading}</label>

    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" value ={text}></textarea>
    
   


  </div>
    </>
  )
}