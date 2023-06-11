import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';



const ClassUpdateModal = ({ isOpen, setIsOpen, classData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    

    

    const onSubmit = data => {
        // console.log(data);

        const updateClassData = {
            className: data.className,
            availableSeats: parseInt(data.availableSeats),
            price: parseInt(data.price)
        }

        
        axiosSecure.patch(`/instructor/update-class/${classData._id}`, updateClassData)
        .then(res=> {
            console.log(res);
            if(res.data.acknowledged){
                toast.success('succesfully updated')
                setIsOpen(false)
            }
        })
    }

// console.log('classData',classData);


    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-fit transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Update Class
                                    </Dialog.Title>

                                    

                                        <form onSubmit={handleSubmit(onSubmit)} className="card md:mt-7 flex-shrink-0 w-[50vw] shadow-2xl bg-base-100 ">
                                            <div className="card-body">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Class Name</span>
                                                    </label>
                                                    <input defaultValue={classData.className} type="text" {...register("className", { required: true })} placeholder="Class Name" className="input input-bordered" />
                                                </div>

                                                <div className="flex gap-4">
                                                    <div className="form-control w-full">
                                                        <label className="label">
                                                            <span className="label-text">Instructor Name</span>
                                                        </label>
                                                        <input {...register("name", { required: true })} defaultValue={user.displayName} type="text" placeholder="Instructor name" className="input input-bordered" readOnly />
                                                    </div>

                                                    <div className="form-control w-full">
                                                        <label className="label">
                                                            <span className="label-text">Instructor Email</span>
                                                        </label>
                                                        <input {...register("email", { required: true })} defaultValue={user.email} type="text" placeholder="Instructor name" className="input input-bordered" readOnly />
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <div className="form-control w-full">
                                                        <label className="label">
                                                            <span className="label-text">Available seats</span>
                                                        </label>
                                                        <input defaultValue={classData.availableSeats} type="text" {...register("availableSeats", { required: true, pattern: /^[0-9]+$/ })} placeholder="Available seats" className="input input-bordered" />
                                                    </div>

                                                    <div className="form-control w-full">
                                                        <label className="label">
                                                            <span className="label-text">Price</span>
                                                        </label>
                                                        <input defaultValue={classData.price} type="text" {...register("price", { required: true, pattern: /^[0-9]+$/ })} placeholder="Price" className="input input-bordered" />
                                                    </div>
                                                </div>

                                                <div className="form-control w-full max-w-xs">
                                                    <label className="label">
                                                        <span className="label-text">Image*</span>

                                                    </label>
                                                    <img src={classData.classImage} alt="class" className='h-28 w-fit' />

                                                </div>

                                                {errors.availableSeats?.type === 'pattern' && (
                                                    <p className="dark:text-red-500 text-red-500 mt-1">Please enter a valid availableSeats number</p>
                                                )}
                                                {errors.price?.type === 'pattern' && (
                                                    <p className="dark:text-red-500 text-red-500 mt-1">Please enter a valid price number</p>
                                                )}

                                                <div className="form-control mt-6">
                                                    <button className="btn btn-primary">Add</button>
                                                </div>
                                            </div>
                                        </form>
                                


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default ClassUpdateModal;