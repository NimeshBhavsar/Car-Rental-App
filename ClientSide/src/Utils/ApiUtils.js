
const API_BASE_URL= 'https://car-rental-app-server.onrender.com';


function GetCars(){
  return fetch(`${API_BASE_URL}/cars`,{
    headers:{
        "authorization":JSON.parse(localStorage.getItem("token-admin"))
    }
  })
  .then(res=>res.json())
}


function GetCar(id){
    return fetch(`${API_BASE_URL}/cars/${id}`,{
      headers:{
          "authorization":JSON.parse(localStorage.getItem("token-admin"))
      }
    })
    .then(res=>res.json())
  }

function addCar(cardata){
    return fetch(`${API_BASE_URL}/cars`, {
        method: 'POST',
        headers:{
            "authorization":JSON.parse(localStorage.getItem("token-admin"))
        },
       body: cardata
    })
    .then(res => res.json())
}

function deleteCar(id){
    return fetch(`${API_BASE_URL}/cars/${id}`, {
        method: 'DELETE',
        headers:{
            "authorization":JSON.parse(localStorage.getItem("token-admin"))
        },
    }).then(res => {
        if(res.status === 200){
            return true
        }
        return false
    })
}

export {addCar, GetCars,deleteCar, GetCar}