import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import './CheckOutForm.css'
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";



const CheckoutForm = ({ price, data }) => {
    const stripe = useStripe();
    const element = useElements();
    const { user } = useContext(AuthContext);
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        if (price) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !element) {
            return
        }

        const card = element.getElement(CardElement);

        if (card === null) {
            return;
        }

        setProcessing(true)

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log("error", error);
            setCardError(error.message)
        }
        else {
            setCardError('')
            // console.log('paymentmethod', paymentMethod)
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user.displayName || 'anonymus',
                    email: user.email || 'anonymus'
                }
            }
        });

        if (confirmError) {
            setCardError(confirmError)
            console.log(confirmError)
        }

        console.log(paymentIntent);

        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
         
            setTransactionId(paymentIntent.id)
            //save payment information to the server
            const payment = {
                name: user.displayName,
                email: user.email,
                transactionId: paymentIntent.id,
                price,
                selectedClassId: data._id,
                classesId: data.classId,
                classImage: data.classImage,
                className: data.className,
                date: new Date,
                instructorName: data.instructorName,
            }

            axiosSecure.post('/payments', payment)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertResult.insertedId){
                    toast.success('payment successfully')
                    navigate('/dashboard/selected-classes')
                }
            })
        }

    }


    return (
        <>
            <form onSubmit={handleSubmit} className="mt-1">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="card-actions justify-end">
                    <button type="submit" disabled={!stripe || !clientSecret || processing} className="btn btn-sm btn-primary mt-5">
                        Pay
                    </button>
                </div>

            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
        </>
    );
};

export default CheckoutForm;