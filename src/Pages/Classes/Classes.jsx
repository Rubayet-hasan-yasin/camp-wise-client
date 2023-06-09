import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Card from "./card";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Classes = () => {
    const {user} = useContext(AuthContext);




    // useEffect(() => {
    //     axios.get('http://localhost:5000/classes')
    //         .then(res => {
    //             console.log(res);
    //             setClasses(res.data)
    //         })
    // }, [])


    const { data, refetch } = useQuery({
        queryKey: ['classes', 'selected'],
        enabled: !!user,
        queryFn: async () => {
            const classes = await axios('http://localhost:5000/classes');
            const selectedClasses = await axios(`http://localhost:5000/selected-class?email=${user.email}`);

            return { classes: classes.data, selectedClasses: selectedClasses.data }
        }
    })



    return (
        <section className="container mx-auto my-20 px-4">
            <div className="grid grid-cols-3 gap-10">

                {
                    data?.classes.map((clas, i) => <Card
                        key={i}
                        clas={clas}
                        data={data}
                        refetch={refetch}
                    />)
                }



            </div>
        </section>
    );
};

export default Classes;