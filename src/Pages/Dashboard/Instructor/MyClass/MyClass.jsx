import { useContext, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ClassUpdateModal from "../../../../components/ClassUpdateModal/ClassUpdateModal";


const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [isOpen, setIsOpen] = useState(false);

    const { data: myClass = [] } = useQuery({
        queryKey: ['instructor-class', user?.email],
        enabled: !!user.email,
        queryFn: async () => {
            const res = await axiosSecure(`/instructor/my-classes?email=${user?.email}`);
            return res.data;
        }
    })

    console.log(myClass);


    return (
        <div>
            <div className="">
                <div className="border-b-4 border-t-4 px-7 py-3 w-fit mx-auto">
                    <h2 className="text-4xl font-bold">My Class</h2>
                </div>

                <div className="mt-8">
                    {
                        myClass?.map(clas => (

                            <div key={clas._id} className="indicator">
                                <span className="indicator-item badge badge-primary">{clas.status}</span>
                                <div className="grid w-full place-items-center">
                                    {/* content start */}
                                    <div className="card lg:card-side w-[60vw] bg-base-100 dark:bg-transparent dark:border shadow-xl">
                                        <figure className="w-1/3">
                                            <img src={clas.classImage} alt="class image" className="object-cover h-full" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-3xl font-bold">{clas.className}</h2>
                                            <p>Available seats: {clas.availableSeats}</p>
                                            <p>Total Students: {clas.students}</p>
                                            <p>Price: ${clas.price}</p>

                                            {/* TODO: feedbak from admin */}

                                            <div className="card-actions justify-end">
                                                <button onClick={() => setIsOpen(true)} className="btn btn-primary">Update</button>
                                            </div>

                                            <ClassUpdateModal
                                                isOpen={isOpen}
                                                setIsOpen={setIsOpen}
                                                classData={clas}
                                            />
                                        </div>
                                    </div>

                                    {/* content end */}
                                </div>
                            </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyClass;