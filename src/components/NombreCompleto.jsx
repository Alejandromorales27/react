import React from 'react'
import '../App.css'
import { MiEdad } from './MIEdad'

export const NombreCompleto = (props, show) => {
    console.log("props: ",props)
  return (
    <> {/* react.frament */}
        <h3 className='App'>
        me llamo {props.name}
        </h3>
        <MiEdad age={props.age} show={props.show}/>
    </>
  )
}

/* export {NombreCompleto,otra exportacion} */
