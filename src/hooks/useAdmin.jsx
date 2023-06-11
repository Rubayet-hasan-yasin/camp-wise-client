import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export const useAdmin = ()=>{
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !!user?.email,
        queryFn: async()=>{
            const res = await axiosSecure(`/admin/${user.email}`);
             
            return res.data.admin;
        }
    })

    return [isAdmin, isAdminLoading]
}