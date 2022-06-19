import { axiosConfig } from "../configuration/axiosConfig"

export const obtenerTodos = () => {
  return axiosConfig.get(
      '/inventarios'
  );
}