import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { useState } from "react";
import DeclineModal from "../../../../components/DeclineModal/DeclineModal";
import { motion } from "framer-motion"



const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [openModal, setOpenModal] = useState(false);
    const [classId, setClassId] = useState('');



    const { data: allClasses = [], refetch } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const res = await axiosSecure('/all-classes');

            return res.data;
        }
    })

    const handleApproved = id => {
        console.log(id);

        axiosSecure.put(`/update-class-status/${id}`)
            .then(res => {
                refetch()
                if (res.data?.modifiedCount) {
                    toast.success('class approved')
                }
            })
    }



    return (
        <div className="w-[80vw] flex flex-col items-center gap-10">
            {
                allClasses.map(classs => (
                    <motion.div
                        key={classs._id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        <div className="indicator">
                            <span className="indicator-item badge badge-primary">{classs.status}</span>
                            <div className="grid w-full place-items-center">
                                {/* content start */}
                                <div className="card lg:card-side w-[60vw] bg-base-100 dark:bg-transparent dark:border shadow-xl border-2">
                                    <figure className="w-1/3">
                                        <img src={classs.classImage} alt="class image" className="object-cover h-full" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-3xl font-bold">{classs.className}</h2>
                                        <p>Available seats: {classs.availableSeats}</p>
                                        <p>Total Students: {classs.students}</p>
                                        <p>Price: ${classs.price}</p>




                                        <div className="card-actions justify-end">
                                            <button
                                                onClick={() => handleApproved(classs._id)}
                                                disabled={classs.status === 'approved' || classs.status === 'declined'}
                                                className="btn btn-primary"
                                            >Approve</button>



                                            <button
                                                onClick={() => {
                                                    setOpenModal(true)
                                                    setClassId(classs._id)
                                                }}
                                                disabled={classs.status === 'approved' || classs.status === 'declined'}
                                                className="btn"

                                            >Decline and feedback</button>

                                        </div>
                                    </div>

                                </div>

                                {/* content end */}

                            </div>
                        </div>
                    </motion.div>
                ))
            }

            <DeclineModal
                classId={classId}
                openModal={openModal}
                setOpenModal={setOpenModal}
                refetch={refetch}
            />
        </div>
    );
};

export default ManageClasses;