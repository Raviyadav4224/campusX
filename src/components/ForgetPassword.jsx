import React ,{useEffect, useState} from "react";
import "./Login.scss";
const ForgetPassword = () => {
  const [email,setEmail]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(`form submit`);
  }
useEffect(()=>{
  document.title="Forgot password"
},[])
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Forget Password</h1>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ForgetPassword