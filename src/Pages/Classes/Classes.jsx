import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Card from "./card";



const Classes = () => {
    
    // useEffect(() => {
    //     axios.get('http://localhost:5000/classes')
    //         .then(res => {
    //             console.log(res);
    //             setClasses(res.data)
    //         })
    // }, [])


    const { data: classes=[] } = useQuery({
        queryKey: ['classes', 'selected'],
        queryFn: async () => {
            const classes = await axios('http://localhost:5000/classes');
            // const selectedClasses = await axios(`http://localhost:5000/selected-class?email=${user.email}`);

           

            return classes.data;
        }
    })



    return (
        <section className="container mx-auto my-20 px-4">
            <div className="grid grid-cols-3 gap-10">

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