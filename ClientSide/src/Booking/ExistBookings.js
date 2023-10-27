import React, { useContext, useEffect, useState } from "react";
import './../Components/Style/myBooking.css';
import NavLogout from './NavLogout';
import { CarContextDetails } from "../Context/CarContext";
import {Link} from "react-router-dom"
import Home from "../Components/Home";


export default function ExistBookings() {
  
   
   const {Bookdata,setBookData, setEditPaymentDetails, headerData}=useContext(CarContextDetails);
   const TokenUser= JSON.parse(localStorage.getItem("token-user"))
    const userId=JSON.parse(localStorage.getItem("user-id"))
    useEffect(()=>{

     fetch(`https://car-rental-app-server.onrender.com/orders/${userId}`)

        .then(res=>res.json())
        .then(data=>setBookData((data.data).reverse()))
    },[])
    console.log(Bookdata)


    function deleteCarData(id){

        fetch(`https://car-rental-app-server.onrender.com/orders/${id}`, {

            method: 'DELETE',
            headers:{
                "authorization":JSON.parse(localStorage.getItem("token-user"))
            },
        }).then(res => {
            if(res.status === 200){
                return true
            }
            return false
        })
   
    }
    console.log(Bookdata)
  
    return <>
 
    {TokenUser?<>
    <NavLogout />
       
        {Bookdata.map((d, m) => {
                return <div key={m}>
                    <div id="outer">
                        <p>My Booking </p>
                        <div className="bookings">
                            <div id="myimg" className="smallerDiv" >
                                <img src={`https://car-rental-app-server.onrender.com/cars/${d.image}`} width="250px" />
                            </div>

                            <div id="toyota" className="smallerDiv">
                                <h4 >{d.name}</h4>
                                <h5>{d.type}</h5>
                                <h6>Details: {d.Details}</h6>
                                <h6>Car Details: {d.carDetails}</h6>
                            </div>

                            <div className="smallerDiv">
                                <div><span id="name-of-the-booking-hading-page">origin </span>:<span>{d.origin}</span></div>
                                <div><span id="name-of-the-booking-hading-page">Destination </span>: <span>{d.destination}</span></div>
                                <div> <span id="name-of-the-booking-hading-page">Start Date</span> :<span>{d.startDate}</span></div>
                                <div><span id="name-of-the-booking-hading-page">Start Date </span>:<span>{d.endDate}</span></div>
                            </div>
                            <div className="smallerDiv">
                            <img src={d.MapImg} alt="map is unable to render" id="Abcdefghijklmn"/>
                            </div>

                            <div className="smallerDiv">
                                <h6> <span id="name-of-the-booking-hading-page">Booking ID</span>: <span>{d.BookingId}</span></h6>
                                <h6> <span id="name-of-the-booking-hading-page">Booking Date</span>:<span>{d.date}</span> </h6>
                                <h6> <span id="name-of-the-booking-hading-page" >Booking Time</span>: <span>{d.time}</span></h6>
                            </div>
                            <div className="smallerDiv" >
                                <div className="buttons">
                                    <Link to="edit-payment-details" ><button id="btuunt-concle-in-exsist-Booking-edit" onClick={()=>setEditPaymentDetails(d)}>Edit</button></Link>   
                                    <button id="btuunt-concle-in-exsist-Booking" onClick={()=>deleteCarData(d._id)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    </>:<Home/>}
    </>

}
