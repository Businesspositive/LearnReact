import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert]=useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode =()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#7d4ed1';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils-Darkmode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils-Lightmode"

    }
  }
  return (
    <>
    {/* Passing the component with props in main app */}
    <Navbar title = "TextUtils" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container">
      <Textform heading = "Enter the text to convert" mode={mode} showAlert = {showAlert}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
