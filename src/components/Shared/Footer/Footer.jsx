import { FaCampground, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-white py-10 dark:bg-gray-800">
            <div className="footer container px-4 mx-auto text-base-content">
                <div>
                    <Link to={'/'}>
                        <h4 className="text-gray-700 font-bold text-3xl flex gap-2 items-center">
                            <FaCampground className="w-11 h-11" /> Camp Wise
                        </h4>
                    </Link>




                    <h4 className="footer-title mt-8 text-xl">Follow Us</h4>

                    <div className='grid grid-cols-3 gap-6'>

                        <button className='bg-slate-300 bg-opacity-40 hover:bg-opacity-60 h-14 w-14 p-2 rounded-full'><FaTwitter className="w-full h-full" /></button>
                        <button className='bg-slate-300 bg-opacity-40 hover:bg-opacity-60 h-14 w-14 p-2 rounded-full'><FaFacebook className="w-full h-full" /></button>
                        <button className='bg-slate-300 bg-opacity-40 hover:bg-opacity-60 h-14 w-14 p-2 rounded-full'><FaInstagram className="w-full h-full" /></button>

                    </div>


                </div>
                <ul className="dark:text-white text-black">
                    <span className="footer-title dark:text-slate-100">Services</span>
                    <li className="link link-hover">Music Lessons</li>
                    <li className="link link-hover">Group Classes</li>
                    <li className="link link-hover">Private Instruction</li>
                    <li className="link link-hover">Music Theory Classes</li>
                </ul>
                <ul className="dark:text-white text-black">
                    <span className="footer-title dark:text-slate-100">Company</span>
                    <li className="link link-hover">Home</li>
                    <li className="link link-hover">Instructors</li>
                    <li className="link link-hover">Classes</li>
                    <li className="link link-hover">Music Therapy</li>
                </ul>
                <ul className="dark:text-white text-black">
                    <span className="footer-title dark:text-slate-100">Legal</span>
                    <li className="link link-hover">Terms of Service</li>
                    <li className="link link-hover">Privacy Policy</li>
                    <li className="link link-hover">Limitation of Liability</li>
                    <li className="link link-hover">Cookie Policy</li>
                </ul>
            </div>
            <hr  className="mb-5 mt-8 w-[90%] mx-auto"/>
            <div className="text-center">
                <p>Copyright © 2023 - All right reserved by Camp Wise Academy Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;