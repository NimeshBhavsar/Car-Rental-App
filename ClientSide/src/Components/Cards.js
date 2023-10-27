
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import './Style/cards.css';


export default function Cards() {

  let [data, setdata] = useState([])
  useEffect(() => {
    fetch("https://car-rental-app-y59o.onrender.com/cars/", {
      headers: {
        "authorization": JSON.parse(localStorage.getItem("token-user"))
      }
    })
      .then(res => res.json())
      .then(res => setdata(res));
  }, [])

  const [bookData, setbookData] = useState([])
  console.log(bookData);

  return <>
    <div id="mainParents">
      <div id="carCard">
        {
          data.map((d, i) => {
            return <div key={i}>
              <Card className='card'>

                <div className="img">
                  <Card.Img src={`https://car-rental-app-y59o.onrender.com/cars/${d.image}`} />
                </div>
                <div id="cardBodys">
                  <Card.Body>
                    <div id="seater">
                      <Card.Text id="person" >{d.name}</Card.Text>
                    </div>

                    <div id="name-container">
                      <Card.Text id="name" >6 persons</Card.Text>
                      <Card.Text id="milage" >{d.milage}</Card.Text>
                    </div>
                  </Card.Body>

                  <div id="booking">
                    <Card.Link id="fare">Fare Details</Card.Link>
                    <Card.Link href="/payment" id="book" onClick={() => setbookData({ d })} >Book Now</Card.Link>
                  </div>

                </div>
              </Card>
            </div>
          })
        }
      </div>
    </div>
  </>
}
