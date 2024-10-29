import axios from 'axios';
import Cookie from 'cookie-universal';
import { base_url_student } from './Api';
import { base_url_admin } from './Api';

const cookie = Cookie();
const tokenAdmin = cookie.get('BearerAdmin');

export const Axios = axios.create({
  baseURL: base_url_student,
});
export const AxiosAdmin = axios.create({
  baseURL: base_url_admin,
});

export const AxiosWithToken = axios.create({
  baseURL: base_url_admin,
  headers: {
    Authorization: `Bearer ${tokenAdmin}`,
  },
});
