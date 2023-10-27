import React from 'react';
import NavLogout from './NavLogout'
import Header from '../Components/Header';
import Home from '../Components/Home';
import {useState, useEffect} from 'react';
import { CarContextDetails } from './../Context/CarContext';
import { useContext } from 'react';
import {Link} from "react-router-dom"
import "./../../src/Components/Style/cards.css";
import "./../../src/Components/Style/filter.css"



function OrderPage(){
  const TokenUser= JSON.parse(localStorage.getItem("token-user"))
  const {CarData, setCarData} = useContext(CarContextDetails);
  let [data, setdata] = useState([])
  useEffect(() => {

    fetch("https://car-rental-app-server.onrender.com/cars/",{

      headers:{
        "authorization":JSON.parse(localStorage.getItem("token-user "))
    }
    }).then(res => res.json())
      .then(res => setdata(res));
  }, [])
  const [selectBtn , setSelectBtn] = useState(false);
  const [selectSeating , setSelectSeating] = useState(false)
  const [milageSelect , setMilageSelect] = useState(false);
  const [filterData , setFilterData] = useState([]);
  
  

function filterFunc(e){
const type= data.filter(d=>d.type===e.target.id)
const milage= data.filter(d=>d.milage===e.target.id)
if(e.target.id==="All"){
  setFilterData(data)
}else if (type.length!==0) {
  setFilterData(type)
} else if (milage.length!==0) {
  setFilterData(milage)
}
}

  


 return(<>
  {TokenUser?<div>

      <NavLogout/>
       <Header/>
      

<div id="select-butn-fileter-container-indiv">
  <div>
         <button onClick={()=>setSelectBtn(false)} onDoubleClick={()=>setSelectBtn(true)} id="button-of-the-filete-the-data-in-bookin-page">CarType</button>
         {selectBtn?<div id="car-type-filter-in-booking-page">
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="UV" /><label>UV</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="XUV"/><label>XUV</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="All"/><label>All</label><br/>
         </div>:null}
   </div>
   <div>
         <button onClick={()=>setSelectSeating(false)} onDoubleClick={()=>setSelectSeating(true)} id="button-of-the-filete-the-data-in-bookin-page">Seating</button>
         {selectSeating?<div id="car-type-filter-in-booking-page">
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="UV" /><label>6 person</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="XUV"/><label>9 person</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="All"/><label>4 person</label><br/>
         </div>:null}
  </div>
  <div>
         <button onClick={()=>setMilageSelect(false)} onDoubleClick={()=>setMilageSelect(true)} id="button-of-the-filete-the-data-in-bookin-page">Milage</button>
         {milageSelect?<div id="car-type-filter-in-booking-page">
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="20Km/L" /><label>20Km/L</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="14Km/L"/><label>14Km/L</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="14Km/L"/><label>15Km/L</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="18Km/L"/><label>18Km/L</label><br/>
         <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterFunc} id="10Km/L"/><label>10Km/L</label><br/>
         </div>:null}
         </div>     
      </div>



 {filterData.length>0?<div id="carCard">{
        filterData.map((d, i) => {
          return <div key={i} id="card-of-the-order-page-i-make-this">

              <div className="img-of-te-car-details-order">

                <img src={`https://car-rental-app-server.onrender.com/cars/${d.image}`} id="img-of-the-car-order"/>

              </div>
              <div id="seater">
                    <h5 id="person" >{d.name}</h5>
              </div>
              <div id="name-container">
                    <h5 id="name" >6 persons</h5>
                    <h5 id="milage"  >{d.perKm}RS/KM</h5>
              </div>
              <div id="booking">
                  <h6  id="fare">Fare Details</h6>
                  <Link to="/payment"> <span onClick={()=>setCarData(d)} id="book-now-of-the-car" >Book Now</span></Link> 
                </div>
          </div>
        })
      }
    </div>:<div id="carCard">{
        data.map((d, i) => {
          return <div key={i} id="card-of-the-order-page-i-make-this">

              <div className="img-of-te-car-details-order">

                <img src={`https://car-rental-app-server.onrender.com/cars/${d.image}`} id="img-of-the-car-order"/>

              </div>
              <div id="seater">
                    <h5 id="person" >{d.name}</h5>
              </div>
              <div id="name-container">
                    <h5 id="name" >6 persons</h5>
                    <h5 id="milage"  >{d.perKm}RS/KM</h5>
              </div>
              <div id="booking">
                  <h6  id="fare">Fare Details</h6>
                  <Link to="/payment"> <span onClick={()=>setCarData(d)} id="book-now-of-the-car" >Book Now</span></Link> 
                </div>
          </div>
        })
      }
    </div>
}
</div>:<Home/>}
</>
 )
}
export default OrderPage;