import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";



const CheckoutForm = () => {
    const stripe = useStripe();
    const element = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !element) {
            return
        }

        const card = element.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log("error", error);
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log('paymentmethod', paymentMethod)
        }

    }


    return (
        <>
            <form onSubmit={handleSubmit} className="mt-10">
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
                    <button type="submit" disabled={!stripe} className="btn btn-sm btn-primary mt-5">
                        Pay
                    </button>
                </div>

            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
        </>
    );
};

export default CheckoutForm;