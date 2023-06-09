
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Result } from "postcss";
import { toast } from "react-hot-toast";





const SignUpButton = () => {
    const {googleSignIn} = useContext(AuthContext);


    const handleGoogle = ()=> {
    
        googleSignIn()
        .then(()=>{
            toast.success('Login successfull')
        })
        .catch(err=>{
            toast.error(err.message)
        })
    }


    return (
        <div>
            <div className='flex items-center pt-4 space-x-1'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-sm dark:text-gray-400'>
                    Signup with social accounts
                </p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>
            <div

            onClick={handleGoogle}
                className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer hover:bg-gray-200 shadow-xl rounded'
            >
                <FcGoogle size={32} />

                <p className="dark:text-gray-800">Continue with Google</p>
            </div>
            
        </div>
   
    );
};

export default SignUpButton;