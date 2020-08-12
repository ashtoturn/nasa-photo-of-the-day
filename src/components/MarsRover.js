import React from 'react'



export default function MarsRover(props){
const { marsPhoto } = props
return (
<div className="marsRover">
<h3>Mars Rover</h3> 
<img src={marsPhoto['img_src']} alt="Mars Rover doing It's thing">
</img>
</div>)
}
