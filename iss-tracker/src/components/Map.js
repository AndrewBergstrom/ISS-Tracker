import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const ISS_URL = "http://api.open-notify.org/iss-now.json"
const MAP_KEY = process.env.REACT_APP_MAP_KEY
const img = <img src='./iss.svg' alt='iss' height='45px'/>

const SpaceStation = ({ img }) => <div>{img}</div>

class Map extends Component {
 
  state ={
    center:{
      lat:0,
      lng:0
    },
    zoom:1
  }

  componentDidMount(){
   this.getCoordinates()
   this.interval=setInterval(this.getCoordinates, 2000)
}

componentWillMount(){
  clearInterval(this.interval)
}

getCoordinates = () => {
  fetch(ISS_URL)
  .then(res => res.json())
  .then(data => this.setState({
    center: {
      lat:data.iss_position.latitude,
      lng:data.iss_position.longitude
    }
  }))
}
  
  render(){
    console.log("LAT:", this.state.center.lat)
    console.log("LNG:", this.state.center.lng)

    return(
      <div>
        <p>latitude: {this.state.center.lat}</p>
    <p>Longitude: {}</p>
      </div>
    )
  }
}



export default Map;