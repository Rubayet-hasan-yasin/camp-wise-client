import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)

const Payment = () => {
    const [axiosSecure] = useAxiosSecure();
    const params = useParams();
    const [data, setData] = useState({});


    useEffect(() => {
        axiosSecure(`/payment/${params.id}`)
            .then(res => {
                setData(res.data)
                console.log(res.data);
            })
    }, [axiosSecure, params])


    return (
        <section className="flex min-h-[80vh] items-center">
            <div className="card w-[60vw] h-fit lg:card-side bg-base-100 shadow-xl">
                <figure className="w-1/2">
                    <img src={data.classImage} alt="class" className="object-cover h-full" />
                </figure>
                <div className="card-body w-full">
                    <h2 className="card-title text-4xl">Enroll Now</h2>
                    <p>Class: {data.className}</p>
                    <p>Instuctor: {data.instructorName}</p>

                    <p>Price: ${data.price}</p>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm price={data.price}/>
                    </Elements>

                    
                </div>
            </div>
        </section>
    );
};

export default Payment;