import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState('')
  const [isAppReady, setAppReadey] = useState(false)

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
    <div className = "container">
      <h1 className='main-text'>Hello {name}</h1>
      <span style={{fontSize:"20px", backgroundColor:"pink"}}>{number}</span>

      <button onClick={()=>{setNumber(number-1)}}>click on me</button>
    </div>
  );
}

export default App;
