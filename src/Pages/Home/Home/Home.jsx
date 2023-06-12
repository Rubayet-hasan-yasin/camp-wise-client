import { useEffect, useState } from "react";
import Event from "../Event/Event";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";
import axios from "axios";


const Home = () => {
    const [instructors, setInstructors] = useState([]);
    const [popularClass, setPopularClass] = useState([]);


    useEffect(() => {
        axios.get('https://camp-wise-server.vercel.app/instructor')
            .then(res => {
                
                setInstructors(res.data)
            })
        axios.get('https://camp-wise-server.vercel.app/popular-class')
            .then(res => {
                
                setPopularClass(res.data)
            })

    }, [])



    return (
        <div>
            <Slider />

            <PopularClass popularClass={popularClass} />

            <PopularInstructors instructors={instructors}/>


            <Testimonials />


            <h1 className="uppercase text-5xl font-extrabold text-center text-blue-600 bg-yellow-300 dark:bg-transparent py-10 mt-60">UP next: Hayo-went-ha camos- Our Mission</h1>
            <Event />
        </div>
    );
};

export default Home;