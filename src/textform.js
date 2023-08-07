import React,{useState} from 'react'
import "./textform.css"

import Alert from './Alert';
export default function TextForm(props) {
  
  const Toggle=()=>{
    if(!(text==="")){

    let a = text.length;
    let finalText ="";
    for(let i = 0; i < a; i++) {
      // console.log(text[i].toUpperCase() === text[i]);
      if(text[i].toUpperCase() === text[i]) {
        finalText+=text[i].toLowerCase();
    }
    else{
      finalText+=text[i].toUpperCase();

    }
    setText2(finalText);
  }

  props.showAlert("Text toggled",'success')

}
else{
props.showAlert("Enter some text to clear",'danger');
setText2('');
}
  };

  

  const UpperClick =()=>{
    if(!(text==="")){

    let upper= text.toUpperCase();
    setText2(upper);
    props.showAlert("UpperCase done","success");

  }
  else{
  props.showAlert("Enter some text to convert to UpperCase",'danger');
  setText2('');

}
  };

  const clearText=()=>{
    if(!(text==="")){

    setText2('');
    setText('');
    props.showAlert("Text cleared",'success');

  }
  else{
  props.showAlert("Enter some text to clear",'warning');
  setText2('');
}
  };
  const LowerClick=()=>{
    if(!(text==="")){

    let lower= text.toLowerCase();
    setText2(lower);

    props.showAlert("LowerCase done",'success');
  }
  else{
  props.showAlert("Enter some text to convert to lowercase",'danger');
  setText2('');
}
  };

  const copyText=()=>{
    if(!(text==="")){
      navigator.clipboard.writeText(text);
      props.showAlert ("Text copied",'success');
    }
    else
      props.showAlert("Enter some text to copy",'danger');
      setText2('');
  };
  const change=(event)=>{

    setText(event.target.value);

  };

  const wordcounter=(str)=>{
    let a = 0;
    const  splitted  = str.split(/\s+/g);
    for( let  i=0; i<splitted.length; i++ ){
      if( !(splitted[i]===""))
        a+=1;
    }
    return a;
  };
  const charcounter=(str)=>{
    let a=0;
    for( let i=0;i<str.length;i++ ){
      if(!(str[i]===' '))
        a+=1;
    }
    return a;
  };
  const [text,setText]=useState("");
  const [text2,setText2]=useState("");
  return (
    <>
    <Alert alert={props.alert} setAlert={props.setAlert} clearrer={props.clearrer}/>
 



    <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1" className={`mytext-${props.mode==='light'? 'dark':'light'}`}>{props.heading}</label>
    <textarea className={`form-control text-${props.mode==='light'? 'dark':'light'} `}
         id="exampleFormControlTextarea1" rows="8" cols="40" onChange={change} value={text}
          ></textarea>    
    <button type="button" id="uppercase" className="btn btn-primary text-light " onClick={UpperClick}>Convert text to uppercase </button>
    <button type="button" id="lowercase" className="btn btn-primary text-light" onClick={LowerClick}>Convert text to lowercase  </button>
    <button type="button" id="toggle" className="btn btn-primary text-light" onClick={Toggle}>Toggle the text</button>
    <button type="button" id="toggle" className="btn btn-primary text-light" onClick={clearText}>Clear text</button>
    <button type="button" id="toggle" className="btn btn-primary text-light" onClick={copyText}>Copy text</button>


  </div>

  <div className="container">
      <h2 className={`text-${props.mode==='light'? 'dark':'light'}`}>Summary</h2>
      <p className={`text-${props.mode==='light'? 'dark':'light'}`} >Your text has {wordcounter(text) } words and {charcounter(text)} characters</p>
      <p className={`text-${props.mode==='light'? 'dark':'light'}`} >{wordcounter(text)*3/1000} minutes to read</p>

      <h2 className={`text-${props.mode==='light'? 'dark':'light'}`} >Output</h2>
      <textarea className={`form-control text-${props.mode==='light'? 'dark':'light'} textfrom-width`}
         id="exampleFormControlTextarea1" rows="8" onChange={change} value={text2}
          readOnly></textarea>  

  </div>
    </>
  )
}
