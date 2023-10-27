import React, { useContext, useState } from 'react'
import './../Components/Style/Form.css'
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
// import {registerUserLogin} from '../API/API';
import {CarContextDetails} from "../Context/CarContext"
import "./../Components/Style/login.css"

function UserLogin () {
const {adminName} = useContext(CarContextDetails)
const [loder , setLoder] = useState(false)
    const [inputdata, setInputData] = useState({
        email: "",
        password: ""
      });
      
      const handleEmailChange = (e) => {
        setError("")
        setInputData({...inputdata, email: e.target.value});
      }
      
      const handlePasswordChange = (e) => {
        setError("")
        setInputData({...inputdata, password: e.target.value});
      }

    const navigate = useNavigate();
const [error , setError] = useState("");
    const onSubmitData = async(e)=>{
        e.preventDefault();
        // console.log(inputdata);
        const {email, password} = inputdata;

        if(email=== ""){
            toast.error("Email is required");
        }
        else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        }
        else if (password === "") {
            toast.error("Password is required")
        }
        else if (password.length < 4) {
            toast.error("password is too short")
        }
        else if (password.length > 20) {
            toast.error("password is too Long")
        }
        else{
          setLoder(true)
            
          fetch("https://car-rental-app-server.onrender.com/user/login" ,{

            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(inputdata)
          }).then(res=>res.json()).then(res=>{
            if(res.status==="Successfully login"){
              localStorage.setItem("token-user" , JSON.stringify(res.token));
              localStorage.setItem("user-id" , JSON.stringify(res.userId))
              navigate("/orderpage/page3")
            }else if(res.status==="fail"){
              setLoder(false)
              setError("User Details Not Match")
            
            }
          })
        }
        
    } 

    return (
        <>
            <div className="container-of-login-form-in-my-side"  id='form'>
           
            <form action="post" onSubmit={onSubmitData}>
            <h4 className='fom-name-in-login-form'>Login Your Acount</h4><br></br>
            <h6 style={{color:"red"}}>{error}</h6>
    
             <input type="email" name="email" onChange={handleEmailChange} placeholder='Email' className='login-admin-the-css-for-form'  />


             <input type="password" onChange={handlePasswordChange} placeholder='password' className='login-admin-the-css-for-form'/>
             <div id="button-container-in-admin-login-page">   <button type='submit'  id="button-container-in-admin-login-page-btn">{loder?<div id= "loder-of-the-button-of-the-login-submit"></div> :"SIGN IN"}</button></div>
           
            </form>
            <ToastContainer
               position="top-center"
               autoClose={1500}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               theme="dark"
            />
            </div>
        </>
    )
}
  

export default UserLogin