import React, { useState } from 'react'
import UserLogin from '../User/UserLogin'
import UserSign from '../User/UserSign'
import AdminLogin from '../Admin/AdminLogin';
import AdminSign from '../Admin/AdminSign';
import './../Components/Style/Home.css'
import Navigation from './Navigation';

function Home() {
  const [FormType, setFormType]  = useState(<UserLogin/>);
  function usersignup(){
    setFormType(<UserSign/>) 
  };

  function userlogin(){
    setFormType(<UserLogin/>) 
  };

  function Adminlogin(){
    setFormType(<AdminLogin/>) 
  };

  function AdminSignup(){
    setFormType(<AdminSign/>) 
  };
  return (
    <>
    <Navigation/>
      <div className='Home-page'>  
        <div className='Register'>
        <p className='slogan-of-the-home-page'>All you needed was a wheel in Your hand and four on the road.</p> 
          <div className='user'>
            <p>User</p>
            <div className="button-user-admin-login-containecr">
            <button className="button-50" onClick={userlogin}> User Login </button>
            <button className="button-50" onClick={usersignup}> User Sign Up</button>
            </div>
          </div>
          <div className='Admin'>
            <p>Admin</p>
            <div className="button-user-admin-login-containecr">
            <button className="button-50" onClick={Adminlogin}>Admin login</button>
            <button className="button-50" onClick={AdminSignup}>Admin Sign Up</button>
            </div>
          </div>
        </div>   
        <div className='form-type'>
          {FormType}
        </div>
      </div>     
    </>
  )
}


export default Home