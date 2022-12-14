import axios from 'axios';

export const fetchFromApi = axios.create({
  baseURL: 'https://ng-cash-full-stack-production.up.railway.app/',
});