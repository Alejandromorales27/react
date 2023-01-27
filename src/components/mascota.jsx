import React from 'react'
import { MiEdad } from './MIEdad'
import '../App.css';



 export const Mascota = (name,age,show) => {
  return (
    <>
        <h3 className='Mascota'>
        soy una mascota y me llamo {props.name}</h3>
        <MiEdad age = {props.age} show={props.show} />
    </>
  )
}


