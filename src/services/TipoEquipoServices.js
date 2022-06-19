import { axiosConfig } from "../configuration/axiosConfig"

export const obtenerTodos = () => {
    return axiosConfig.get(
        '/tipoEquipos'
    );
  }
  
  export const guardar = (tipoEquipo) => {
    return axiosConfig.post('/tipoEquipos', tipoEquipo);
  }
  
  export const editarPorId = (id, tipoEquipo) => {
    return axiosConfig.put('/tipoEquipos/'+id, tipoEquipo);
  }