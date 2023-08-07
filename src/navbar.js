import React from 'react'
import PropTypes from 'prop-types'
import "./navbar.css"
// import { useState } from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  let myStyle = {
      color:""
  };
  


  // const modeToggler=(props)=>{
  //   console.log(props.mode);
  //   if(props.mode === 'light')
  //     setMode("dark")
  //   else
  //     setMode('light');

  // };

  return (
  

  
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={myStyle}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 text-${props.mode==='light'? 'dark':'light'}`}>
        
        
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.modeToggler} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {(props.mode==='dark') ? 'light':'dark'} mode </label>
  </div>

    </div>
  </div>
</nav>

  )
};

Navbar.propTypes={  //PropTypes are used to define the datatype of the value to be entered into the function
  title: PropTypes.string
};
