import Event from "../Event/Event";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {



    return (
        <div>
            <Slider/>

            <PopularClass/>

            <PopularInstructors/>


            <Testimonials/>


            <h1 className="uppercase text-5xl font-extrabold text-center text-blue-600 bg-yellow-300 dark:bg-transparent py-10 mt-60">UP next: Hayo-went-ha camos- Our Mission</h1>
            <Event/>
        </div>
    );
};

export default Home;