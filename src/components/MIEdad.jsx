import React from 'react'
import '../App.css'
import PropTypes from 'prop-types';



const myStyle={
  ocultar:{display:"none"
  },
  mostrar:{
    display:"block",
    color:"red",
    backgroundColor:"green"
  }

}

export const MiEdad = ({age, show=true}) => {
  return (
    <> 
        <p className='App'
        style={show ? myStyle.mostrar: myStyle.ocultar}
        >=== mi edad es {age} años ===</p>
    </>
  )
}

MiEdad.protTypes ={
  age: PropTypes.number.isRequired
}
