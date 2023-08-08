import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
function App() {
  //alert
  const [alert, setAlert] = useState(null)
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  //dark mode
  const [mode, setMode] = useState('dark');
  const [btnText, setBtnText] = useState('Enable DarkMode');
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode ('dark')
      setBtnText("Enable LightMode")
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enable", "success");
    }else{
      setMode ('light')
      setBtnText("Enable DarkMode")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enable", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <Alert alert={alert}/>
      <div className="container my-4">
         <TextForm showAlert={showAlert} heading="Enter the text to analize blew"/>
         
      </div>
    </>
  )
}

export default App
