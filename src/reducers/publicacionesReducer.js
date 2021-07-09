import {
    AGREGAR_PUBLICACION,
    AGREGAR_PUBLICACION_EXITO,
    AGREGAR_PUBLICACION_ERROR,
    COMENZAR_DESCARGA_PUBLICACIONES,
    DESCARGAR_PUBLICACIONES_EXITO,
    DESCARGAR_PUBLICACIONES_ERROR,
    OBTENER_PUBLICACION
} from '../types';

//Cada reducer tiene su propio state
const initialState = {
    publicaciones: [],
    error:null,
    loading:false,
    publicacionobtener:null
}

export default function(state = initialState, action){
    switch(action.type){
        case AGREGAR_PUBLICACION:
            return {
                ...state,
                loading:action.payload
            }
        case AGREGAR_PUBLICACION_EXITO:
            return{
                ...state,
                loading:false,
                publicaciones : [...state.publicaciones, action.payload]
            }
        case AGREGAR_PUBLICACION_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case COMENZAR_DESCARGA_PUBLICACIONES:
            return{
                ...state,
                loadign:action.payload
            }
        case DESCARGAR_PUBLICACIONES_EXITO:
            return{
                ...state,
                loading:false,
                error: null,
                publicaciones: action.payload
            }
        case DESCARGAR_PUBLICACIONES_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case OBTENER_PUBLICACION:
            return{
                ...state,
                publicacionobtener:action.payload
            }   
        default:
            return state;
    }
}
