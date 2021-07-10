import React from "react"
import Swal from 'sweetalert2';


export const alertaUno = () => {

  Swal.fire({
    title: 'Perfecto!',
    text: 'Ticket Creado con exito',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}
