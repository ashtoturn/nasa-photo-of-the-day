import React, {useEffect, useState} from "react";	
	import axios from 'axios'
	import "./App.css";
	import POTD from './components/POTD'
	import MarsRover from './components/MarsRover'
  
  function App(){
    const [pOTD, setPOTD] = useState({})
    const [marsRover, setMarsRover] = useState([])

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setPOTD(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])

    useEffect(() => {
      axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
      .then(res => {
        setMarsRover(res.data.photos[0])
      })
      .catch(err => 
        console.log(err))
      
    }, [])


    return (
      <div >
        <POTD photo={pOTD.url}/>
        <MarsRover marsPhoto={marsRover}/>
      </div>
    )
  }
  export default App