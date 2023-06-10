import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        axiosSecure.interceptors.request.use((req=>{
            const token = localStorage.getItem('token');
            if(token){
                req.headers.Authorization = `Bearer ${token}`;
            }
            return req;
        }));

        axiosSecure.interceptors.response.use(
            response => response,
            async error =>{
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                    toast.error(error.response.data.message)
                    await logOut()
                    navigate('/')
                }
                return Promise.reject(error);
            }
        )


    },[logOut, navigate])
    
    return [axiosSecure]
};

export default useAxiosSecure;