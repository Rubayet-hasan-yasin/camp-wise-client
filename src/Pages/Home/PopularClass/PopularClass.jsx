const PopularClass = ({popularClass}) => {
    



    return (
        <section className="popular-classes  dark:bg-transparent py-10 my-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-16 text-center">Popular Art and Craft Classes</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {popularClass?.map((item, i) => (
                        <div className="card-body border rounded-xl" key={i}>
                            <figure className="h-72">
                                <img src={item.classImage} alt='class' className="object-cover w-full h-full" />
                            </figure>
                            <h3 className="text-2xl font-bold">{item.className}</h3>
                            <p className="text-gray-700 font-semibold">Instructor: {item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularClass;