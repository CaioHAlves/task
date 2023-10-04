import axios from 'axios';

const obterEndpointApi = () => {
  if (!import.meta.env.VITE_API) {
    throw new Error('Não é possível realizar requisições. Endpoint da API não está configurado.');
  }

  return import.meta.env.VITE_API;
};

const instanciaAxios = axios.create({
  baseURL: obterEndpointApi(),
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, HEAD, OPTIONS, DELETE',
  },
});

export default instanciaAxios;
