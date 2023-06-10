import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";



const Card = ({ selectedClass, selectedClassRefetch }) => {
    const [axiosSecure] = useAxiosSecure();


    const handleDeleteClass = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/selected-classes/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your selected class has been deleted.',
                                'success'
                            )
                            selectedClassRefetch()
                        }
                    })
            }
        })




    }

    return (
        <div>
            <div className={`${selectedClass.availableSeats == 0 && "bg-red-600 dark:bg-red-600"} card w-96 bg-base-100 dark:bg-transparent dark:border border shadow-xl`}>
                <figure className="h-64">
                    <img src={selectedClass.classImage} alt="profile" className="object-cover w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{selectedClass.className}</h2>
                    <p>Instructor: {selectedClass.instructorName}</p>

                    <p>Fee: ${selectedClass.price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDeleteClass(selectedClass._id)} className="btn btn-sm">Delete</button>
                        <Link to={`/dashboard/payment/${selectedClass._id}`}>
                            <button className="btn btn-sm btn-primary">Enroll</button>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;