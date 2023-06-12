import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: allUsers = [] } = useQuery({
        queryKey: ['all-user'],
        queryFn: async () => {
            const res = await axiosSecure('/all-users');

            return res.data
        }
    })


    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Make Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map((user, i) => (
                            <tr key={user._id}>
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
                                <td>
                                    <button className="btn btn-primary btn-xs">Admin</button>
                                </td>
                                <th>
                                    <button className="btn bg-gray-600 text-white btn-xs">Instructor</button>
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