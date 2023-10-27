import React from 'react'
import NavLogout from '../../Booking/NavLogout'
import './../Style/Payment.css'
import PaymentCard from './PaymentCard'

function Payment() {
  return (
    <div className='box'>
      <NavLogout/>
     <PaymentCard/>
    </div>
  )
}

export default Payment