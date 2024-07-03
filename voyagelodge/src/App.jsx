import { useState } from 'react'
import axios from "axios"
import './App.css'

const App =()=>{
  const [input,setInput] = useState({})

   const submitedata =()=>{
     let url = "http://localhost:8000/admin";
     axios.post(url,input).then((res)=>{
      setInput(res.data)
     })
   }
  return(
    <>
    <form onSubmit={submitedata}>
      <input type="text" name="input" onChange={e=>setInput(e.target.value)} />
      <button>click</button>
    </form>
    </>
  )
}

export default App
