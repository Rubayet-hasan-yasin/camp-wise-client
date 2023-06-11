import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Card from "./card";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SelectedClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();


    const { data: selectedClasses = [], refetch: selectedClassRefetch } = useQuery({
        queryKey: ['selected'],
        enabled: !!user,
        queryFn: async () => {

            const selectedClasses = await axiosSecure(`http://localhost:5000/selected-class?email=${user.email}`);



            return selectedClasses.data;
        }
    })

    return (
        <div className="grid md:grid-cols-2 gap-10">
            {
                selectedClasses.map(select => <Card
                    key={select._id}
                    selectedClass={select}
                    selectedClassRefetch={selectedClassRefetch}
                ></Card>)
            }
        </div>
    );
};

export default SelectedClasses;