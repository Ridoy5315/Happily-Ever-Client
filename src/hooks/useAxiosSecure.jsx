import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
     baseURL: import.meta.env.VITE_API_URL
})
const useAxiosSecure = () => {
     const navigate = useNavigate();
     const {logOut} = useAuth();
     //request interceptor to add authorization header for every secure call to the api
     axiosSecure.interceptors.request.use(function (config) {
          const token = localStorage.getItem('access-token')
          config.headers.authorization = `Bearer ${token}`;
          return config;
     }, function (error) {
          return Promise.reject(error);
     });

     //intercepts 401 and 403 status
     axiosSecure.interceptors.response.use(function(response) {
          return response;
     }, async(error) => {
          const status = error.response.status;
          if(status === 401 || status === 403){
               await logOut();
               navigate('/logIn')
          }
          return Promise.reject(error);
     })
     return axiosSecure;
     
};

export default useAxiosSecure;