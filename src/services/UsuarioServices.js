import { axiosConfig } from "../configuration/axiosConfig"

export const obtenerTodosUsuarios = () => {
  return axiosConfig.get(
      '/usuarios'
  );
}
