import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Classes = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();


    // useEffect(() => {
    //     axios.get('http://localhost:5000/classes')
    //         .then(res => {
    //             console.log(res);
    //             setClasses(res.data)
    //         })
    // }, [])


    const {data: classes=[], refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async()=>{
            const res =await axios('http://localhost:5000/classes')
            return res.data;
        }
    })

   


    const handleSelectButton = ()=>{
        if(!user){
            Swal.fire({
                title: 'log in before selecting the course',
                
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              })
        }




    }


    return (
        <section className="container mx-auto my-20 px-4">
            <div className="grid grid-cols-3 gap-10">

                {
                    classes.map((clas, i) => <div key={i} className={`${clas.availableSeats == 0 && "bg-red-600 dark:bg-red-600"} card w-96 bg-base-100 dark:bg-transparent dark:border border shadow-xl`}>
                        <figure className="h-64">
                            <img src={clas.classImage} alt="profile" className="object-cover w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">{clas.className}</h2>
                            <p>Instructor: {clas.name}</p>
                            <p>Available seats: {clas.availableSeats}</p>
                            <p>Fee: ${clas.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={handleSelectButton} disabled={clas.availableSeats == 0} className="btn btn-sm">Select</button>
                            </div>
                        </div>
                    </div>)
                }



            </div>
        </section>
    );
};

export default Classes;