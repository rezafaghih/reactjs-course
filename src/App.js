import './App.css';
import { useEffect, useState, useRef, createContext } from 'react';
import {Auth} from "./components/Auth"

export const ThemeContext = createContext("light")

function App() {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState('')
  const [isAppReady, setAppReadey] = useState(false)
  const [theme , setTheme] = useState('dark')
  const input = useRef();
  const changeName =()=>{
    setName("reza")
  }
  useEffect(()=>{
    if (!isAppReady){
      changeName()
      setAppReadey(true)
    }
  }, [isAppReady])


  return (
    <ThemeContext.Provider value = {{theme, setTheme}}>
      <div className = "container">
        <Auth num = {number}/>
        <h1 className='main-text'>Hello {name}</h1>
        <span style={{fontSize:"20px", backgroundColor:"pink"}}>{number}</span>
        <input type='text' ref={input}/>
        <span>website theme is {theme}</span>
        <button onClick={()=>{setNumber(number+1)}}>click on me</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
