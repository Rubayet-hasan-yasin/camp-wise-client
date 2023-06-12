import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();


    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['all-user'],
        queryFn: async () => {
            const res = await axiosSecure('/all-users');

            return res.data
        }
    })

    const handleMakeAdmin = id => {
        console.log(id);

        axiosSecure.put(`/make-admin/${id}`)
            .then(res => {
                console.log(res);
                if (res.data.acknowledged) {
                    toast.success('This user now an admin');
                    refetch()
                }
            })
    }


    const handleMakeInstructor = id =>{
        axiosSecure.put(`/make-instructor/${id}`)
        .then(res=>{
            console.log(res)
            if(res.data.acknowledged){
                toast.success('This user now an instructor');
                refetch()
            }
        })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table bg-slate-100 text-center">
                <thead className="rounded-3xl h-14 text-lg">
                    <tr className="bg-slate-300 rounded-3xl">
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Make Admin</th>
                        <th>Make Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map((user, i) => (
                            <tr key={user._id} className="border-gray-200 border-b-4">
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photoURL || 'https://i.ibb.co/vhHRv1N/154901-OV13-M5-460-ai.png'} alt="user" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>{user.role ? user.role : 'student'}</td>
                                <td>
                                    <button
                                        onClick={() => handleMakeAdmin(user._id)}
                                        disabled={user.role === 'admin'}
                                        className="btn btn-primary btn-xs">Admin</button>
                                </td>
                                <th>
                                    <button
                                    onClick={()=>handleMakeInstructor(user._id)}
                                        disabled={user.role === 'admin' || user.role === 'instructor'}
                                        className="btn bg-gray-600 text-white btn-xs"
                                    >Instructor</button>
                                </th>
                            </tr>
                        ))
                    }


                </tbody>


            </table>
        </div>
    );
};

export default ManageUsers;