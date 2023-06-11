import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const MyClass = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data: myClass=[]} = useQuery({
        queryKey: ['instructor-class', user?.email],
        enabled: !!user.email,
        queryFn: async()=>{
            const res = await axiosSecure(`/instructor/my-classes?email=${user?.email}`);
            return res.data;
        }
    })

    console.log(myClass);
    

    return (
        <div>
            <div className="border-b-4 border-t-4 px-7 py-3 w-fit mx-auto">
                <h2 className="text-4xl font-bold">My Class</h2>
            </div>

            <div>
                {
                    myClass?.map(clas=> <div key={clas._id}>
                        <p>hello</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyClass;