import React, { useEffect, useState, useContext } from "react";
import { CarContextDetails } from './../Context/CarContext'


function Map(props) {
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const {headerData} = useContext(CarContextDetails);
  const [imageUrl, setMapImageUrl] = useState(null);

  const { origin, destination } = props;

  useEffect(() => {
    const loadMap = () => {
      setDirectionsService(new window.google.maps.DirectionsService());
      setDirectionsRenderer(new window.google.maps.DirectionsRenderer());
      const mapInstance = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12
      });
      setMap(mapInstance);
    };

    if (window.google && window.google.maps) {
      loadMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAppNv_hKiqWizwpVnzD4j8xCH1YY8VqsE&libraries=places`;
      script.async = true;
      script.onload = loadMap;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {

    if (origin && destination && directionsService && directionsRenderer) {
      const request = {
        origin,
        destination,
        travelMode: "DRIVING"
      };
      directionsService.route(request,async (result, status) => {
        if (status === "OK") {
          await directionsRenderer.setDirections(result);
        await  directionsRenderer.setMap(map);
        const distanceNew =  result.routes[0].legs[0].distance.text;
          const dist = distanceNew
          let pattern = /[0-9]/g;
          let ans = dist.match(pattern)
          headerData.distance = ans.join("");
        } else {
          console.error("Directions request failed due to " + status);
        }

        
        
       
        
        const path = encodeURIComponent(`color:0x0000ff|weight:5|${result.routes[0].overview_path.map(point => `${point.lat()},${point.lng()}`).join('|')}`);
        const mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAppNv_hKiqWizwpVnzD4j8xCH1YY8VqsE&size=600x400&center=${origin}&zoom=auto&path=${path}`;
        const image = new Image();
        image.onload = () => setMapImageUrl(mapImageUrl);
        image.src = mapImageUrl;
        headerData.MapImg = image.src;

      });


    }
  }, [origin, destination, directionsService, directionsRenderer, map]);

  return <div id="map" style={{width: "17vw", height: "15vh" }}></div>;
}

export default Map ;