import axios from 'axios';
import Cookie from 'cookie-universal';
import { base_url_student, base_url_admin } from './Api';
import { store } from '../app/store';

const cookie = Cookie();
const tokenAdmin = cookie.get('BearerAdmin');
const tokenStudent = cookie.get('Bearer');

// إعداد Axios instance للطالب
export const AxiosWithTokenStudent = axios.create({
  baseURL: base_url_student,
  headers: {
    Authorization: `Bearer ${tokenStudent}`,
  },
});
// إعداد Axios instance للطالب
export const Axios = axios.create({
  baseURL: base_url_student,
});

// إعداد Interceptor لإضافة اللغة في كل طلب بناءً على الحالة الحالية من Redux
Axios.interceptors.request.use((config) => {
  const lang = store.getState().language.lang; // جلب اللغة الحالية من Redux
  config.headers['Accept-Language'] = lang;
  return config;
});

// إعداد Axios instance للمشرف
export const AxiosAdmin = axios.create({
  baseURL: base_url_admin,
});

// إعداد Axios instance مع التوكن للمشرف
export const AxiosWithToken = axios.create({
  baseURL: base_url_admin,
});

// إعداد Interceptor لإضافة اللغة في كل طلب مع التوكن أيضًا
AxiosWithToken.interceptors.request.use((config) => {
  const lang = store.getState().language.lang;
  config.headers['Accept-Language'] = lang;
  config.headers['Authorization'] = `Bearer ${tokenAdmin}`;
  return config;
});
