import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Card from "./card";
import Loader from "../../components/Shared/Loader/Loader";



const Classes = () => {


    const { data: classes=[], isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const classes = await axios('https://camp-wise-server.vercel.app/classes');

        

            return classes.data;
        }
    })


    if(isLoading){
        return <Loader/>
    }
    

    return (
        <section className="container mx-auto my-20 md:px-4">
            <div className="grid md:grid-cols-3 gap-10">

                {
                    classes.map((clas, i) => <Card
                        key={i}
                        clas={clas}
                    />)
                }



            </div>
        </section>
    );
};

export default Classes;