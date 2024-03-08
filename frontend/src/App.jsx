import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [drugs, setDrugs] = useState(0)
  useEffect(()=>{
    fetch("http://localhost:3000/api/v1/drugs")
    .then(res=>res.json())
    .then(data=>setDrugs(data))
    .catch(error=>console.log(error))
  },[])

  return (
    <div>
      <h1>My Drugs Store</h1>
      <ul>
       {
        drugs.map((el,i)=>
           <li key={i}>{el.drugs_name}</li>
        )
       }
       </ul>
    </div>
  )
}

export default App
