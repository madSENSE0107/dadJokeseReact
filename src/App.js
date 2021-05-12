import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const url="https://official-joke-api.appspot.com/random_joke";
  
  const [line1,setLine1]=useState("")
  const [line2,setLine2]=useState("")
  const [change, setChange] = useState(false)
  const handleChange = () => {
    if (change===false) {
      setChange(true);
    } else {
      setChange(false)
    }
    

}
  
  useEffect(()=>{
    const quote= async() => {
      try {
          const response=await axios.get(url);
          // console.log(response)
          const {data:{setup,punchline}}=response;
          // if (typeof punchline === 'string') {
          //   console.log('Variable is a string');
          // }
          // else {
          //   console.log('Variable is not a string');
          // }
          setLine1(setup)
          setLine2(punchline)
          
         
          return {setup,punchline};  
      } catch (error) {
          console.log(error);
      }      
    }
    quote()
  },[change])
  // console.log(line1,line2)

  return (
    <div className="app" >
      <div className="setup">{line1}
        <div className="punch">{line2}</div>
        <button onClick={handleChange} className="botam">
          <span>Lame !!</span>
        </button>
      </div>    
    </div>
    
  );
}

export default App;
