import React from 'react'

function CarCard({image, name, milage}) {

  const bookCar=(e)=>{
    console.log(e.target);
  }

  return (
    <>
<div className="Individual-card">
<div id="cardBody">
    <div id="Car-image-cardd">

       <img src={`https://car-rental-app-server.onrender.com/cars/${image}`} alt="not available" />

    </div>
    <div id="name-container">
       <div className="name-column">
       <li>Name:- {name}</li>
       <li>Milage:- {milage}</li>
       </div>
       <div className="button-submit">
        <button onClick={bookCar}>select</button>
       </div>
    </div>
</div>
</div >  
    </>
  )
}

export default CarCard