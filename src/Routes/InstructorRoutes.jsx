import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useInstructor from "../hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Shared/Loader/Loader";

const InstructorRoutes = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <Loader/>
    }

    if(user && isInstructor){
        return children
    }
    

    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default InstructorRoutes;