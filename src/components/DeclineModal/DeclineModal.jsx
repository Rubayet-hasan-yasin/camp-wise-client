import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const DeclineModal = ({ setOpenModal, openModal, classId, refetch }) => {
    const [axiosSecure] = useAxiosSecure();

    // console.log(classId);


    const handleFeedback = (event, id) => {
        event.preventDefault()

// console.log(id);
        const feedBack = event.target.feedback.value;

        axiosSecure.put(`/decline-class/${id}`, {feedBack})
        .then(()=>{
            toast.success('declined succesfully')
            setOpenModal(false)
            refetch()
        })

    }


    return (
        <Transition appear show={openModal} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={() => setOpenModal(false)}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium leading-6 text-gray-900'
                                >
                                    Are you sure?
                                </Dialog.Title>
                                <div className='mt-2'>

                                    <form onSubmit={(e)=>handleFeedback(e, classId)}>
                                        <textarea name="feedback" className="w-full textarea textarea-secondary" cols="30" rows="3" placeholder="Enter your feedback..."></textarea>

                                        <hr className='mt-8 ' />
                                        <div className='flex mt-2 justify-around'>
                                            <button
                                                type='submit'
                                                className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'

                                            >
                                                Decline
                                            </button>
                                            <button
                                                type='button'
                                                className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                                                onClick={() => setOpenModal(false)}
                                            >
                                                Cancle
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default DeclineModal;