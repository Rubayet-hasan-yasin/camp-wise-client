import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import SignUpButton from '../../components/Shared/signUpButton/SignUpButton';
import { saveUser } from '../../api/saveUser';


const SignUp = () => {
    const [passShow, setPassShow] = useState(false);
    const { registerWithEmailAndPassword } = useContext(AuthContext);
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {


        const password = data.password;
        const confirmPassword = data.confirmPassword;

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }


        //image upload 

        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image)

        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_KEY}`, formData)
            .then(res => {

                const imgURL = res.data.data.display_url;

                //create user
                registerWithEmailAndPassword(data.email, data.password)
                    .then(result => {
                        const user = result.user;
                        updateProfile(user, {
                            displayName: data.name, photoURL: imgURL
                        }).then(() => {
                            // Profile updated!
                            toast.success("Registration Successful!")
                            saveUser(user)
                            reset()
                            navigate('/')

                        }).catch((error) => {
                            // An error occurred
                            toast.error(error.message);
                        });

                    })
                    .catch(err => {
                        const error = err.message;
                        toast.error(error);
                    })


            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message)
            })



    };


    return (
        <div className="min-h-screen w-full py-6 flex flex-col justify-center sm:py-12">
            <div className="relative w-5/6 py-3 mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className=" mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold dark:text-gray-700">Please SignUp</h1>
                        </div>
                        <div className="divide-y divide-gray-200">





                            <form onSubmit={handleSubmit(onSubmit)} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 w-full">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" {...register("name", { required: true })} name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />


                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" {...register("email", { required: true })} name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />


                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                </div>

                                {/* Password  */}

                                <div className="relative z-0 w-full mb-6 group">


                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>



                                    <input type={passShow ? "text" : "password"} {...register("password", {
                                        required: true,
                                        pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/
                                    })}
                                        name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                                    <label className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                        <FaEye onClick={() => setPassShow(!passShow)} />
                                    </label>

                                </div>

                                {/* confirm password  */}
                                <div className="relative z-0 w-full mb-6 group">


                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>



                                    <input type={passShow ? "text" : "password"} {...register("confirmPassword", {
                                        required: true,
                                        pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/
                                    })}
                                        name="confirmPassword" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                                    <label className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                        <FaEye onClick={() => setPassShow(!passShow)} />
                                    </label>

                                </div>

                                <div className="inline-block">
                                    <label className='text-sm'> Profile picture</label>

                                    <input type="file" {...register("photo", { required: true })} name='photo' accept='image/*' className="file-input file-input-bordered file-input-xs w-full max-w-xs" placeholder='profile' />
                                </div>


                                {/* <div className='space-x-5 text-sm pb-2'>
                                    <label className='text-sm block mb-2'>Gender</label>

                                    <label className='items-center gap-1 inline-flex'><input type="radio" {...register("gender", { required: true })} name="gender" className="radio w-4 h-4 outline-offset-0 outline-none" value={'Male'} /> Male </label>


                                    <label className='items-center gap-1 inline-flex'><input type="radio" name="gender" {...register("gender", { required: true })} className="radio w-4 h-4 outline-offset-0 outline-none" value={'Female'} /> Female </label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">


                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>



                                    <input type="tel"
                                        {...register("phone", { required: true, pattern: /^\d{5,15}$/ })}
                                        name="phone" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                                </div>
                                <div className="relative z-0 w-full mb-6 group">


                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>



                                    <input type="text"
                                        {...register("address", { required: true })}
                                        name="address" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                                </div> */}

                                <div className="relative">
                                    <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1 w-full">SignUp</button>
                                </div>
                            </form >

                            {errors.password?.type === 'required' && (
                                <p className="dark:text-red-500 text-red-500 mt-1">Password is required</p>
                            )}

                            {errors.password?.type === 'pattern' && (
                                <p className="dark:text-red-500 text-red-500 mt-1">
                                    Password should have at least one capital letter and one special character
                                </p>
                            )}
                            {errors.phone?.type === 'pattern' && (
                                <p className="dark:text-red-500 text-red-500 mt-1">Phone Number must be a 5-15 digit number</p>
                            )}

                            <p className='px-6 mb-6 text-sm text-center dark:text-gray-800 text-gray-400'>
                                Already have an account?{' '}
                                <Link
                                    to='/login'
                                    className='hover:underline hover:text-rose-500 text-gray-600'
                                >
                                    Login
                                </Link>
                            </p>
                        </div>

                        <SignUpButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;