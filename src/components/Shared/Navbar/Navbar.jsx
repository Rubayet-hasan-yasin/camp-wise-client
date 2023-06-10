import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaCampground } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-hot-toast";


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    // console.log(user);


    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark])

    const handleDarkTheme = () => {
        setIsDark(!isDark);
    }


    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('LogOut succesfull')
                navigate('/')
            })
    }

    const list = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/instructors'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Instructors
            </NavLink>
        </li>


        <li>
            <NavLink
                to='/classes'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Classes
            </NavLink>
        </li>



        {
            user &&

            <>
                <li>
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Dashboard
                    </NavLink>
                </li>

                <li className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-0">
                        <img

                            src={user?.photoURL || 'https://i.ibb.co/vhHRv1N/154901-OV13-M5-460-ai.png'}
                            referrerPolicy="no-referrer"
                            className="object-cover w-12" />
                    </div>
                </li>
            </>
        }




        <li>
            {user ?
                <button onClick={handleLogOut} className='ml-12 py-3 px-7 bg-[#EA906C] rounded-lg shadow-md hover:bg-[#f9a31ac5] hover:ring-1'>Log out</button>
                :
                <Link to={'/login'}>
                    <button className='ml-12 py-3 px-7 bg-[#EA906C] rounded-lg shadow-md hover:bg-[#f9a31ac5] hover:ring-1'>Login</button>
                </Link>
            }
        </li>
    </>

    return (
        <nav className="bg-base-200 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to={'/'}>
                            <h4 className="text-gray-700 font-bold text-3xl flex gap-2 items-center">
                                <FaCampground className="w-11 h-11" /> Camp Wise
                            </h4>
                        </Link>

                    </div>


                    <ul className='space-x-8 hidden md:flex md:items-center'>
                        <div onClick={handleDarkTheme} className="bg-orange-200 dark:bg-orange-600 p-2 rounded-full">
                            {isDark ?
                                <BsSun size={20} />
                                :
                                <BsMoon size={20} />
                            }
                        </div>
                        {list}

                    </ul>




                    <div className="flex md:hidden">
                        <button
                            className="text-gray-700 hover:text-white focus:outline-none"
                            onClick={handleMobileMenuToggle}
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4ZM20 9H4C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9ZM20 16H4C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16Z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H4ZM4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H12C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13H4ZM3 19C3 18.4477 3.44772 18 4 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19Z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <ul className="md:hidden mt-2 space-y-8">
                        {
                            list
                        }
                    </ul>
                )}
            </div>

        </nav>
    );
};

export default Navbar;