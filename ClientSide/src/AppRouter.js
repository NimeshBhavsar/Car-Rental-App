import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import UserLogin from './User/UserLogin';
import UserSign from './User/UserSign';
import './Components/Style/AppRouter.css'
import AdminPage from "./Components/AdminpageAllDetail/AdminPage"
import AddCarDetails from "./Components/AdminpageAllDetail/AddCarDetails"
import EditCarDetails from './Components/AdminpageAllDetail/EditCarDetails'
import ExistBookings from "./Booking/ExistBookings"
import OrderPage from "./Booking/OrderPage"
import Page3 from './Booking/Page3'
import Payment from './Components/Payent/Payment';
import EditPaymentDetails from './Components/Payent/EditPaymentDetails';
import PageNotFound from './Components/PageNotFound';

function AppRouter() {
  return (
   <div className='whole' style={{ background:'White'}}>
       <Router>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/features' element={<UserLogin/>}/>
                <Route path='/pricing' element={<UserSign/>}/>
                <Route path='/admin-page' element={<AdminPage/>}/>
                <Route path='/add-car-details' element={<AddCarDetails/>}/>
                <Route path='/edit-car-details' element={<EditCarDetails/>}/>
                <Route path='orderpage/Page3' element={<Page3/>}/>
                <Route path='/OrderPage' element={<OrderPage/>}/>
                <Route path='/ExistBookings' element={<ExistBookings/>}/>
                <Route path='/payment' element={<Payment/>}/>
                <Route path="/ExistBookings/edit-payment-details" element={<EditPaymentDetails/>}/>
                <Route path="*" element={<PageNotFound/>}/>
       </Routes>

      </Router>
          
    </div>
  )
}

export default AppRouter;