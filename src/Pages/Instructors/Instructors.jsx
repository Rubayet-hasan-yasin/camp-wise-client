import axios from "axios";
import { useEffect, useState } from "react";

const Instructors = () => {
    const [instructor, setInstructor] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/instructor')
            .then(res => {
                console.log(res);
                setInstructor(res.data)
            })
    }, [])

    console.log();

    return (
        <section className="container mx-auto my-20 px-4">
            <div className="grid grid-cols-3 gap-10">

                {
                    instructor.map((ins, i) => <div key={i} className="card w-96 bg-base-100 dark:bg-transparent dark:border border shadow-xl">
                        <figure className="h-64">
                            <img src={ins.profile} alt="profile" className="object-cover w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">{ins.name}</h2>
                            <p>{ins.email}</p>
                            <p>Number of Classes taken: 1</p>
                            <p>Name of the Class: {ins.className}</p>
                            <div className="card-actions justify-end">
                                
                            </div>
                        </div>
                    </div>)
                }



            </div>
        </section>
    );
};

export default Instructors;