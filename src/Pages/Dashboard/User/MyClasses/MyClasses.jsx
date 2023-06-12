import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { motion } from "framer-motion"
import moment from "moment/moment";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider";

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data } = useQuery({
        queryKey: ['my-classes'],
        enabled: !!user,
        queryFn: async () => {
            const myClasses = await axiosSecure(`/my-classes?email=${user.email}`);

            return myClasses.data;
        }
    })

    console.log(data);

    return (
        <div className="grid md:grid-cols-2 gap-10">
            {
                data?.map(myCalss => (
                    <motion.div
                        key={myCalss._id}
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        <div className='card w-96 bg-base-100 dark:bg-transparent dark:border border shadow-xl'>
                            <figure className="h-64">
                                <img src={myCalss.classImage} alt="profile" className="object-cover w-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-3xl">{myCalss.className}</h2>
                                <p>Instructor: {myCalss.instructorName}</p>

                                <p>Enroll Date: {moment(myCalss.date).format('MMMM D YYYY, h:mm a')} </p>

                            </div>
                        </div>
                    </motion.div>))
            }
        </div>
    );
};

export default MyClasses;