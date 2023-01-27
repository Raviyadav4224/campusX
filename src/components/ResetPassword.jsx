import React ,{useState} from "react";
import "./Login.scss";

const ResetPassword = () => {
  const [email,setEmail]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(`form submit`);
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ResetPassword