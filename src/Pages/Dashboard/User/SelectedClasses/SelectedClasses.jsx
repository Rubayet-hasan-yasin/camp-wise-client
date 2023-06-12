import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Card from "./card";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Loader from "../../../../components/Shared/Loader/Loader";

const SelectedClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();


    const { data: selectedClasses = [], refetch: selectedClassRefetch, isLoading } = useQuery({
        queryKey: ['selected'],
        enabled: !!user,
        queryFn: async () => {

            const selectedClasses = await axiosSecure(`https://camp-wise-server.vercel.app/selected-class?email=${user.email}`);



            return selectedClasses.data;
        }
    })

    // console.log(selectedClasses.length);

    if(isLoading){
        return <Loader/>
    }

    return (
        <>
            {
                selectedClasses.length == 0 &&

                <div className="mx-auto text-center h-[80vh] w-[80vw]">
                    <h1 className="text-4xl mt-10 font-bold">You have not selected a class yet, please select one.</h1>

                    <Link to={'/classes'}>
                        <button className="btn mt-10 btn-primary text-white">select class</button>
                    </Link>
                </div>

            }
            <div className="grid md:grid-cols-2 gap-10">

                {
                    selectedClasses.map(select => <Card
                        key={select._id}
                        selectedClass={select}
                        selectedClassRefetch={selectedClassRefetch}
                    ></Card>)
                }
            </div>
        </>
    );
};

export default SelectedClasses;