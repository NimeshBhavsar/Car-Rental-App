import React from 'react'
import './../Style/Payment.css'
import { CarContextDetails } from '../../Context/CarContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Map from "../Map";


function PaymentCard() {
const userId=JSON.parse(localStorage.getItem("user-id"))
const navigate= useNavigate();

  const {CarData , headerData} = useContext(CarContextDetails)
  console.log(CarData)
  const date= new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const BookingId= new Date().getTime();
  const Object ={
  name:CarData.name,
  perKm:CarData.perKm,
  model:CarData.model,
  milage:CarData.milage,
  image:CarData.image,
  type:CarData.type,
  Details:CarData.Details,
  carDetails:CarData.carDetails,
  date:date,time:time,BookingId:BookingId,
  userId:userId,
  distance:headerData.distance,
  MapImg:headerData.MapImg,
  destination:headerData.destination,
  origin:headerData.origin,
  startDate:headerData.startDate,
  endDate:headerData.endDate,
  };
console.log(headerData)
let Distance ,pricing,Subtotal,Tax,total;
if(!isNaN(CarData.distance)){
  Distance = parseInt(headerData.distance);
  pricing = parseInt(CarData.perKm)
  Subtotal=(pricing*Distance);
  Tax = parseInt((Subtotal)*0.20);
   total = Subtotal+Tax;
}else{
  Distance=240
  pricing=parseInt(CarData.perKm)
  Subtotal=(pricing*Distance)
  Tax = parseInt((Subtotal)*0.20);
  total = Subtotal+Tax;
}
const Proceed = () => {
  

   fetch("https://car-rental-app-server.onrender.com/orders",{
   method:"POST",
   headers:{
    "content-type":"application/json"
   },
   body:JSON.stringify(Object)
   }).then(res=>res.json())
   .then(data=>console.log(data));


navigate("/ExistBookings")

  };
   
  return (<>
  <div id="map-of-the-payment-page-we-change-that-position">
  <Map origin={headerData.origin} destination={headerData.destination} className='mai-hoon-map'/>
  </div>
<div>
    <div className='box-of-payment'>
    <div className="contanermaginc-lum">
       <div className="cardetail-app">
          <div className="upper">
            <h3>Booking Details</h3>
            <div className="comp">
               <div className="bobob">
                   <li className='name-of-the-page-payment-of-the-car'>Car Name :  </li>
                   <li className='name-of-the-page-payment-of-the-car'>Car Model:</li>
               </div>
               <div className="bobob">
                   <li className='ans-of-the-file-payment-in-data-of-file'>{CarData.name}</li>
                   <li className='ans-of-the-file-payment-in-data-of-file'>{CarData.model}</li>
               </div>
               <div className="image-of-car-in-rental-payment">
                   <img src={`https://car-rental-app-server.onrender.com/cars/${CarData.image}`} alt="not availble"  className='img'/>
               </div>
            </div>
          </div>
          <div className="midddle">
          <div className="data">
                   <li className='name-of-the-page-payment-of-the-car'>Origin : </li>
                   <li className='name-of-the-page-payment-of-the-car'> Deatination : </li>
                   <li className='name-of-the-page-payment-of-the-car'>Start-Dtate : </li>
                   <li className='name-of-the-page-payment-of-the-car'>End-Date : </li>
               </div>
               <div className="data">
                   <li className='ans-of-the-file-payment-in-data-of-file'> {headerData.origin}</li>
                   <li className='ans-of-the-file-payment-in-data-of-file'> {headerData.destination}</li>
                   <li className='ans-of-the-file-payment-in-data-of-file'> {headerData.startDate}</li>
                   <li className='ans-of-the-file-payment-in-data-of-file'> {headerData.endDate}</li>
               </div>
               <div className="image-of-hte-map">
              
               </div>
          </div>
          <div className="lower">
                <div className="boomking-cont-dgg">
                <div className="bookingId">
                   <li className='name-of-the-page-payment-of-the-car'>Booking ID : </li>
                   <li className='name-of-the-page-payment-of-the-car'>Booking Date : </li>
                   <li className='name-of-the-page-payment-of-the-car'>Booking Time : </li>
                   </div>
                   <div className="bookingId">
                   <li className='ans-of-the-file-payment-in-data-of-file'>{BookingId}</li>
                   <li className='ans-of-the-file-payment-in-data-of-file'>{date}</li>
                   <li className='ans-of-the-file-payment-in-data-of-file'> {time}</li>
                   </div>

                </div>
                   <div className="cancel-button-of-page">
                       <button className='cncl-brfd' onClick={()=>navigate("/orderpage")}>Cancel</button>
                   </div>
          </div>
       </div>
       <div className="payment">
         <div className="payupper">
           <h3>Payment Details</h3>
           <div className='order-details'>
           <div className="parameter">
               <li className='name-of-the-page-payment-of-the-car'>price/Km</li>
               <li className='name-of-the-page-payment-of-the-car'>Distance</li>
               <li className='name-of-the-page-payment-of-the-car'>SubTotal</li>
               <li className='name-of-the-page-payment-of-the-car'>Tax(gst)</li>
           </div>
           <div className="data-gogog">
               <li className='ans-of-the-file-payment-in-data-of-file'>{pricing}/KM</li>
               <li className='ans-of-the-file-payment-in-data-of-file'>{Distance} Km</li>
               <li className='ans-of-the-file-payment-in-data-of-file'>{Subtotal} RS</li>
               <li className='ans-of-the-file-payment-in-data-of-file'>{Tax} RS</li>
           </div>
           </div>
         </div>
         <div className="paylower">
          <li className='indiv-sub-class name-of-the-page-payment-of-the-car'>Grand TOTAL</li>
         <li  className='ans-of-the-file-payment-in-data-of-file-total'>{total} RS</li>
         </div>
         
         <button className='payment-button' onClick={Proceed}>proceed</button>

       </div>
    </div>
   </div>
   
   </div>
 </> )
}

export default PaymentCard