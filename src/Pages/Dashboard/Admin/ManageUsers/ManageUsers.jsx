import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    // const {data} = useQuery({
    //     queryKey: ['']
    // })


    return (
        <div>
            manage users
        </div>
    );
};

export default ManageUsers;