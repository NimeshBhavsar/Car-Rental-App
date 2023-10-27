import React from "react"
import "../Style/AdminPagenav.css"
import { useNavigate } from "react-router-dom"

export default function AdminpageNav(){
    const Navigater = useNavigate();
    function logoutFunc(){
        localStorage.clear();
        Navigater("/")
    }
return<>
<nav id="admin-page-nav-container-my-nav">
<div id="logo-of-the-rental-car-app">
    <img src="https://media.istockphoto.com/id/1290071290/vector/rental-car-icon.jpg?s=612x612&w=0&k=20&c=q4EsvU3jJJYbcZTJ1EzKh6c-Dvy39HagvAUgTCRK9bE=" id="img-logo" />
    <span id="name-of-the-app-rental-car-app">Car Rental App</span>
</div>
<button id="logout-admin-page-butn-admin" onClick={logoutFunc} >Logout</button>
</nav>
</>
}