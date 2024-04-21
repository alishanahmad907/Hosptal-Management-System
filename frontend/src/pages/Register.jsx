import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { Navigate, useNavigate,Link } from 'react-router-dom';

const Register = () => {

    const {isAuthenticated, setIsAuthenticated} = useContext(Context);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nic, setNic] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");

    const navigateTo = useNavigate();

    const handleRegister = (e) => { 
        e.preventDefault();
     }

     if (isAuthenticated){
        return <Navigate to={"/"}/>
     }
  return (
    <div className='container form-component register-form'>
        <h2>Sign Up</h2>
        <p>Please Sign Up to continue</p>
        <form onSubmit={handleRegister}>

            <div>
                <input type="text" placeholder='First Name' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                <input type="text" placeholder='Last Name' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
            </div>

            <div>
                <input type="text" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="number" placeholder='Phone Number' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
            </div>
            <div>
                <input type="number" placeholder='NIC' value={nic} onChange={(e)=>{setNic(e.target.value)}}/>
                <input type="date" placeholder='Date Of Birth' value={dob} onChange={(e)=>{setDob(e.target.value)}}/>
            </div>
            <div>
                <select value={gender} onChange={(e) => { e.target.value }}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div
						style={{
							gap: "10px",
							justifyContent: "flex-end",
							flexDirection: "row",
						}}
					>
						<p style={{ marginBottom: 0 }}>Alredy Registered?</p>
						<Link to={"/login"} style={{ textDecoration: "none", color: "#271776ca" }}>
							Login Now
						</Link>
					</div>
					<div style={{ justifyContent: "center", alignItems: "center" }}>
						<button type="submit">Register</button>
					</div>
        </form>
    </div>
  )
}

export default Register