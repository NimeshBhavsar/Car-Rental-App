import React, { useContext } from 'react';
import '../Components/Style/header.css';
import { Link } from 'react-router-dom';
import { CarContextDetails } from '../Context/CarContext';

function Header() {
  const {headerData ,setheaderData,setInputData}=useContext(CarContextDetails);
  setInputData(headerData)
  return (
    <div id='header'>
      <div className='container'>
        <form id="form" action="">

          <li className='Origin' 
             >Origin :{headerData.origin}</li>

          <i className="fa-solid fa-arrow-right  arrow" style={{ color: "#4279cd" }}></i>

          <li  className="Origin"
            >Destination :{headerData.destination}</li>

          <li type="date"  className="Origin" 
             >Starting from :{headerData.startDate}</li>

          <li type="date"  className="Origin"
            >Ending :{headerData.endDate}</li>

          
          <Link to="./Page3" id="modify" onClick={()=>setheaderData(headerData)}>Modify</Link>
        </form>
    
      </div>
    </div>
  )
}
export default Header;