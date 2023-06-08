
const PopularInstructors = () => {

    const instructors = [
        {
            name: 'John Smith',
            profilePicture: 'https://plus.unsplash.com/premium_photo-1682088292716-210029b03143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            className: 'Oil Painting',
            students: 50,
        },
        {
            name: 'Emma Johnson',
            profilePicture: 'https://media.istockphoto.com/id/1126452727/photo/ceramic-workshop.jpg?b=1&s=170667a&w=0&k=20&c=mS4q0cUm7HiXXU7sRBbXyNf8vhP6vyXjOVTIB18Bz5M=',
            className: 'Pottery Making',
            students: 45,
        },
        {
            name: 'Michael Brown',
            profilePicture: 'https://img.freepik.com/premium-photo/young-man-paints-his-painting-studio_641386-972.jpg',
            className: 'Watercolor Painting',
            students: 40,
        },
        {
            name: 'Sophia Davis',
            profilePicture: 'https://m.media-amazon.com/images/S/aplus-media/vc/737598f5-8c44-4bf7-a5c0-273b9756212a._CR0,0,300,300_PT0_SX300__.jpg',
            className: 'Sculpture Making',
            students: 38,
        },
        {
            name: 'James Wilson',
            profilePicture: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
            className: 'Calligraphy',
            students: 35,
        },
        {
            name: 'Olivia Martinez',
            profilePicture: 'https://s3.amazonaws.com/urbanglass-site/blog/ElliotWalker2.jpg',
            className: 'Glassblowing',
            students: 32,
        },
    ];


    return (
        <section className="py-8 my-20 mb-40">
            <div className='container mx-auto px-4'>
                <h2 className="text-5xl text-center font-bold mb-10">Popular Instructors</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {instructors.map((instructor, i) => (
                        <div key={i} className="card-body border rounded-xl">
                            <img
                                src={instructor.profilePicture}
                                alt={instructor.name}
                                className="w-full h-48 object-cover rounded"
                            />
                            <div className=" bg-white dark:bg-transparent p-4">
                                <h3 className="text-lg font-semibold mb-2">{instructor.name}</h3>
                                <p className="text-gray-500">Teaching: {instructor.className}</p>
                                <p className="text-gray-500 mt-2">Students: {instructor.students}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularInstructors;