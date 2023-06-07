import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../../assets/fan-404-error.json"

const Errorpage = () => {
    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <div className="w-1/3">
                <Lottie animationData={animation} loop={true}></Lottie>
            </div>
            <p className='text-lg font-semibold mb-2'>404 - PAGE NOT FOUND</p>
            <p className='text-center'>The page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable.</p>

            <Link to={'/'}>
                <button className='my-9 text-2xl font-semibold text-white shadow-2xl bg-sky-500 py-4 px-16 rounded-3xl'>GO TO HOMEPAGE</button>
            </Link>
        </div>
    );
};

export default Errorpage;