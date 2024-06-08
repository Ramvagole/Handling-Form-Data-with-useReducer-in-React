import { act, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function reduce(state,action){

  switch(action.type){

    case "email": return {...state,Email:action.payload}
    case "password":return {...state,Password:action.payload}
    case "reset": return {Email:"",Password:""}
    default :
    return "there is an error"
  }
}
function App() {
  const [count, setCount] = useState({})
  let [data,dispatch]=useReducer(reduce,{Email:"",Password:""})
  
  function submit(e){
    e.preventDefault()
    setCount(data)
    dispatch({type:"reset"})

  }

  return (
    <>
      <form onSubmit={submit}>
        <input type='text' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder='Email' value={data.Email} onChange={(e)=>{dispatch({type:"email",payload:e.target.value})}}/><br/>
        <input type='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}" placeholder='Password' value={data.Password} onChange={(e)=>{dispatch({type:"password",payload:e.target.value})}} title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"/><br/>
        
        <input type="submit"/>
      </form>
      {
        (count.Email!=="" && count.Password!=="") ?<div style={{marginTop:"35px"}}><div>User Email: {count.Email}</div><div>User Password: {count.Password}</div></div> : <div style={{marginTop:"35px"}}>No details found</div>

      }
    </>
  )
}

export default App;
