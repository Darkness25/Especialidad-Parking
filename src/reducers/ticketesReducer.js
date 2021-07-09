import {
    AGREGAR_TICKET,
    AGREGAR_TICKET_EXITO,
    AGREGAR_TICKET_ERROR,
    COMENZAR_DESCARGA_TICKETES,
    DESCARGAR_TICKETES_EXITO,
    DESCARGAR_TICKETES_ERROR,
    OBTENER_TICKET
} from '../types';

//Cada reducer tiene su propio state
const initialState = {
    ticketes: [],
    error:null,
    loading:false,
    ticketobtener:null
}

export default function(state = initialState, action){
    switch(action.type){
        case AGREGAR_TICKET:
            return {
                ...state,
                loading:action.payload
            }
        case AGREGAR_TICKET_EXITO:
            return{
                ...state,
                loading:false,
                publicaciones : [...state.ticketes, action.payload]
            }
        case AGREGAR_TICKET_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case COMENZAR_DESCARGA_TICKETES:
            return{
                ...state,
                loadign:action.payload
            }
        case DESCARGAR_TICKETES_EXITO:
            return{
                ...state,
                loading:false,
                error: null,
                ticketes: action.payload
            }
        case DESCARGAR_TICKETES_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case OBTENER_TICKET:
            return{
                ...state,
                ticketobtener:action.payload
            }   
        default:
            return state;
    }
}
