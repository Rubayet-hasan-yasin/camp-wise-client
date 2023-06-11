import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        enabled: !!user,
        queryFn: async () => {
            const myClasses = await axiosSecure(`/my-classes?email=${user.email}`);

            return myClasses.data;
        }
    })




    return (
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
                            <th>{i+1}</th>
                            <td>{payment.className}</td>
                            <td>{payment.email}</td>
                            <td>{payment.transactionId}</td>
                            <td>{moment(payment.date).format('MMMM D YYYY, h:mm:ss a')}</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;