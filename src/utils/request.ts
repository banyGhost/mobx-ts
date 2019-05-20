import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import config from '../config'

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: config.baseURL
};

const request:AxiosInstance = axios.create(axiosRequestConfig);

export default request;
