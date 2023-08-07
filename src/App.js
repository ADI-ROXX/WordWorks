// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import TextForm from './textform';
import './textform.css'
import React,{useState} from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  const [alert,setAlert] = useState(null);
  const clearrer=()=>{
    setAlert(null);
  };
  const showAlert=(message,type)=>{
    setAlert({msg:message,type:type});
    setTimeout(() => {
    clearrer()
  }, 2000);
  };
  const [mode,setMode]= useState('light');
  const modeToggler=()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor="black";
      showAlert("Dark mode is enabled",'success');
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled",'success');
    }
  };
  return (
    <>
      <Navbar title="Reader" mode={mode} modeToggler={modeToggler}/>
    <Routes>  
      <Route exact path="/" element={
      <div className='container'>
        <TextForm heading="Enter the text here" mode={mode} 
          modeToggler={modeToggler} alert={alert} showAlert={showAlert} clearrer={clearrer}/>
      </div>}/>  
      
      <Route path="/*" element={
      <div className='container'>
        <TextForm heading="Enter the text here" mode={mode} 
          modeToggler={modeToggler} alert={alert} showAlert={showAlert} clearrer={clearrer}/>
      </div>}/>
    </Routes>
    </>
  );
}

export default App;
