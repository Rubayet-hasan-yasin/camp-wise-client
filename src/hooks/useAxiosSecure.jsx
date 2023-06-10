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
            error =>{
                if(error){
                    console.log("error From axiossecure",error);
                    toast.error('error toast form axios secure')
                }
            }
        )


    },[])
    
};

export default useAxiosSecure;