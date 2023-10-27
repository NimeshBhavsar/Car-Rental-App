import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../Components/Style/navLog.css';
import { Navigate, useNavigate,Link } from "react-router-dom"

const NavLogout = () => {
const navigate = useNavigate();
  return (
    <>
  <nav id="admin-page-nav-container-my-nav">
  <div id="logo-of-the-rental-car-app">
    <img src="https://media.istockphoto.com/id/1290071290/vector/rental-car-icon.jpg?s=612x612&w=0&k=20&c=q4EsvU3jJJYbcZTJ1EzKh6c-Dvy39HagvAUgTCRK9bE=" id="img-logo" />
    <span id="name-of-the-app-rental-car-app">Car Rental App</span>
</div>
<div>
<Link to="/Existbookings" ><button id="logout-admin-page-butn-admin"  >Mybooking</button></Link>
<Link to = "/"><button id="logout-admin-page-butn-admin" onClick={()=>localStorage.clear()} >Logout</button></Link>
</div>
</nav>
 </>
  )
}

export default NavLogout;