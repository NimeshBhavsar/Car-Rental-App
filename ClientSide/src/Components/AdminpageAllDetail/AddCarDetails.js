import React, { useContext, useEffect, useState } from "react"
import "../Style/AddCarDetail.css"
import FormStructure from "./FormStructure"
import { addCar } from "../../Utils/ApiUtils"
import { useNavigate } from "react-router-dom"
import { CarContextDetails } from "../../Context/CarContext"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import AdminpageNav from "./AdminpageNav"
import Home from "../Home"
export default function AddCarDetails(){
const navigator1= useNavigate();
const {setCar} = useContext(CarContextDetails);
const [data, setData] = useState({
  name:"",
  type:"",
  model:"",
  milage:"",
  image:"",
  availableFrom:"",
  availableTill:"",
  perKm:"",
  description:"",
  carDetails:"",
  Details:""
})
const [loder , setLoder] = useState(false);
const TokenAdmin= JSON.parse(localStorage.getItem("token-admin"))
    function submitFunction(e){
     e.preventDefault();
        console.log(data)
        const newformData = new FormData(e.target)
        console.log(newformData)
        addCar(newformData).then(data=>{
            setCar(d=>{
              return [data,...d]
          })
          setLoder(false)
          setData({
              name:"",
              type:"",
              model:"",
              milage:"",
              image:"",
              availableFrom:"",
              availableTill:"",
              perKm:"",
              description:"",
              carDetails:"",
              Details:""
          })
          navigator1("/admin-page")
       }
      );
    }
    return<>
 { TokenAdmin?<> <AdminpageNav/>
    <div id="form-main-container-and-main-block">
     <h2 id="name-of-car-detail">Add Car Details</h2>
     <form id="form-add-car-details" onSubmit={submitFunction}>
        <FormStructure data={data} setData={setData}/>
         <div className="input-gap-bottom " id="btn-cancle-add-detail-container">
         <button id="btn-cancle-add-detail" onClick={()=>navigator1("/admin-page")}>Cancel</button>
         <button id="btn-Add-add-detail-ans-save" onClick={()=>setLoder(true)}>Add</button>
        </div>
     </form>
     <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loder}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    </>:<Home/>}
    </>
}