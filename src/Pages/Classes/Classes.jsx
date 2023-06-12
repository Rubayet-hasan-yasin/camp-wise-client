import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Card from "./card";



const Classes = () => {
    
    // useEffect(() => {
    //     axios.get('https://camp-wise-server.vercel.app/classes')
    //         .then(res => {
    //             console.log(res);
    //             setClasses(res.data)
    //         })
    // }, [])


    const { data: classes=[] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const classes = await axios('https://camp-wise-server.vercel.app/classes');

        

            return classes.data;
        }
    })

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