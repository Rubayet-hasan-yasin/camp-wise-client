import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Loader from "../../../../components/Shared/Loader/Loader";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['payments'],
        enabled: !!user,
        queryFn: async () => {
            const myClasses = await axiosSecure(`/my-classes?email=${user.email}`);

            return myClasses.data;
        }
    })

    if(isLoading){
        return <Loader/>
    }



    return (
        <>
            {

                payments.length == 0 ?
                    <div className='h-[80vh] gap-5 flex flex-col justify-center items-center pb-16 '>
                        <p className='text-gray-600 text-xl lg:text-3xl'>No data available</p>
                        <Link to={'/classes'}>
                            <button className="btn btn-primary">Classes</button>
                        </Link>
                    </div>
                    :

                    <div className="overflow-auto">
                        <table className="table border rounded-xl w-[70vw]">
                            {/* head */}
                            <thead>
                                <tr className="text-2xl text-center bg-base-300">
                                    <th></th>
                                    <th>Class Name</th>
                                    <th>Order By</th>
                                    <th>TransactionId</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments.map((payment, i) => <tr
                                        key={payment._id}
                                        className="dark:text-white"
                                    >
                                        <th>{i + 1}</th>
                                        <td>{payment.className}</td>
                                        <td>{payment.email}</td>
                                        <td>{payment.transactionId}</td>
                                        <td>{moment(payment.date).format('MMMM D YYYY, h:mm:ss a')}</td>
                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>

            }

        </>
    );
};

export default PaymentHistory;