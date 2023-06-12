import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../../assets/login-icon.json"
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { GiNinjaStar } from "react-icons/gi";

import SignUpButton from "../../components/Shared/signUpButton/SignUpButton";

const Login = () => {
    const [passShow, setPassShow] = useState(false);
    const {loginWithEmailAndPassword ,loading} = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = data => {
        const email = data.email;
        const password = data.password;


        loginWithEmailAndPassword(email, password)
        .then(()=>{
            toast.success('login successfull')
            reset()
            navigate('/')
        })
        .catch(err=> toast.error(err.message))

    };



    return (

        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 dark:bg-gray-800">
            <div className="w-8/12 flex">
                <Lottie animationData={animation}></Lottie>
            </div>





            <div className="min-h-screen w-full py-6 flex flex-col justify-center sm:py-12">
                <div className="relative w-5/6 py-3 mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className=" mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold dark:text-gray-700">Please Login</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <form onSubmit={handleSubmit(onSubmit)} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 w-full">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="email" {...register("email", { required: true })} name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />


                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">


                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>


                                        <div className="relative">
                                            <input type={passShow ? "text" : "password"} {...register("password", {
                                                required: true,
                                                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/
                                            })}
                                                name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                                            <label className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                                <FaEye onClick={() => setPassShow(!passShow)} />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <button type="submit" 
                                        disabled={loading}
                                        className="bg-blue-500 h-11 text-white rounded-md px-2 py-2 w-full disabled:bg-blue-400">{loading? <GiNinjaStar className="mx-auto animate-spin" size={24}/> : 'Login'}</button>
                                    </div>
                                </form >

                                {errors.password?.type === 'required' && (
                                    <p className="text-red-500 mt-1">Password is required</p>
                                )}
                              
                                {errors.password?.type === 'pattern' && (
                                    <p className="text-red-500 mt-1">
                                        Password should have at least one capital letter and one special character
                                    </p>
                                )}

                                <p className="dark:text-gray-800 mb-6">Don&apos;t have an account ? <Link to={'/signup'} className="text-blue-600 font-bold">Sign up</Link></p>


                            </div>

                            <SignUpButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;