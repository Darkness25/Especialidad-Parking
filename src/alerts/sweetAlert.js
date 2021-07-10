import React from "react"
import Swal from 'sweetalert2';


export const alertaUno = () => {

  Swal.fire({
    title: 'Perfecto!',
    text: 'Ticket Creado con exito',
    background: '#fff url(./images/car.png)',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}

const alertaError = () =>{

  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Algo salio mal, valida que la celda no este en uso!',
    footer: '<a href="http://localhost:3001/ticketes/nueva">Crear un ticket nuevo?</a>'
  })

}
