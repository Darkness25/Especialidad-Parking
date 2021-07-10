import {
    AGREGAR_TICKET,
    AGREGAR_TICKET_EXITO,
    AGREGAR_TICKET_ERROR,
    COMENZAR_DESCARGA_TICKETES,
    DESCARGAR_TICKETES_EXITO,
    DESCARGAR_TICKETES_ERROR,
    OBTENER_TICKET,
    TICKET_OBTENIDA_EXITO,
    TICKET_OBTENIDA_ERROR
} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
import {db} from "../services/firebase";
import {alertaUno} from "../alerts/sweetAlert"


//Crear nuevos Ticketes
export function crearNuevoTicketAction(ticket){
    return async (dispatch) =>{
        dispatch(agregarTicket());
        try {
            //Aca se insertara en la base de datos | API Con axios
            //await clienteAxios.post('TICKETes', TICKET);
            await db.ref("Ticketes").push({
                ...ticket
            });
            
            alertaUno();
            //Si todo sale bien, actualizare el state
            dispatch(agregarTicketExito(ticket))

            

            //Alerta
           // Swal.fire(
           //     'Correcto',
           //     'Registro de ingreso exitoso',
           //     'success'
            //)
        } catch (error) {
            console.log(error);
            //Si hay un error cambiar el state
            dispatch(agregarTicketError(true));

            //alerta de error
            Swal.fire({
                icon:error,
                title:'Hubo un error',
                text: 'Hubo un error, verifica por favor'
            })
        }
    }
}

const agregarTicket = () =>({
    type: AGREGAR_TICKET,
    payload:true
})

//Si la TICKET se guarda en la base de datos
const agregarTicketExito = (ticket) =>({
    type:AGREGAR_TICKET_EXITO,
    payload:ticket
})

//Si hubo un error
const agregarTicketError = (estado)=>({
    type:AGREGAR_TICKET_ERROR,
    payload:estado
});

//Función que descarga los TICKETs de la base de datos
export function obtenerTicketesAction(){
    return async (dispatch)=>{
        dispatch(descargarTicketes());
        try {
            //Hago la operacion para traer los datos de la base de datos API
            //const respuesta = await clienteAxios.get('/TICKETes');
            await db.ref("Ticketes").on("value", snapshot => {
            let datapublications = [];
            snapshot.forEach((snap) => {
                datapublications.push(snap.val());
                })
            dispatch(descargaTicketesExitosa(datapublications))
            });
        } catch (error) {   
            dispatch(descargaTicketesError())
        }
    }
}

const descargarTicketes= () =>({
    type:COMENZAR_DESCARGA_TICKETES,
    payload:true
});

const descargaTicketesExitosa = ticket =>({
    type: DESCARGAR_TICKETES_EXITO,
    payload: ticket
})

const descargaTicketesError = () =>({
    type:DESCARGAR_TICKETES_ERROR,
    payload:true
})

//Esto es una accion para traer una TICKET
export function obtenerTicketVer(ticket){
    return (dispatch) =>{
        dispatch( obtenerTicketVerAction(ticket) )
    }
}

const obtenerTicketVerAction = ticket =>({
    type: OBTENER_TICKET,
    payload: ticket
})

