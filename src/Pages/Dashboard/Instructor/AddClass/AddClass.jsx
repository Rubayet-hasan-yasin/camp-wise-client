import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../../api/imageUpload";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        imageUpload(data.classImage[0])
            .then(res => {
                const image = res.data.display_url;

                const classData = {
                    name: data.name,
                    email: data.email,
                    className: data.className,
                    availableSeats: parseInt(data.availableSeats),
                    price: parseInt(data.price),
                    students: 0,
                    status: 'pending',
                    classImage: image
                }

                //post class data to db
                axiosSecure.post('/instructor/add-class', classData)
                    .then(res => {
                        console.log(res);
                        if (res.data.insertedId) {
                            toast.success('successfully added a class')
                            reset()
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })

            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message)
            })
    };




    return (
        <div>
            <div className="border-b-4 border-t-4 px-7 py-3 w-fit mx-auto">
                <h2 className="text-4xl font-bold">Add A Class</h2>
            </div>


            <form onSubmit={handleSubmit(onSubmit)} className="card md:mt-7 flex-shrink-0 w-[70vw] shadow-2xl bg-base-100 ">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("className", { required: true })} placeholder="Class Name" className="input input-bordered" />
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
                            <input type="text" {...register("availableSeats", { required: true, pattern: /^[0-9]+$/ })} placeholder="Available seats" className="input input-bordered" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" {...register("price", { required: true, pattern: /^[0-9]+$/ })} placeholder="Price" className="input input-bordered" />
                        </div>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image*</span>

                        </label>
                        <input type="file" {...register("classImage", { required: true })} className="file-input file-input-bordered w-full max-w-xs" accept="image/*" />

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
        </div>


    );
};

export default AddClass;