const PopularClass = ({popularClass}) => {
    // const classes = [
    //     {
    //       "name": "Oil Painting",
    //       "description": "Learn the art of oil painting and create stunning masterpieces.",
    //       "category": "popular",
    //       "image": "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=719&q=80",
    //       "students": 50
    //     },
    //     {
    //       "name": "Pottery Making",
    //       "description": "Experience the joy of creating beautiful pottery with your own hands.",
    //       "category": "popular",
    //       "image": "https://images.unsplash.com/photo-1607448885122-b3d4cf451587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHRlcnl8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    //       "students": 45
    //     },
    //     {
    //       "name": "Watercolor Painting",
    //       "description": "Explore the art of watercolor painting and unleash your creativity.",
    //       "category": "popular",
    //       "image": "https://plus.unsplash.com/premium_photo-1673514503017-86f2bb8975c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    //       "students": 40
    //     },
    //     {
    //       "name": "Sculpture Making",
    //       "description": "Learn the techniques of sculpting and bring your ideas to life.",
    //       "category": "popular",
    //       "image": "https://plus.unsplash.com/premium_photo-1677171381887-ab01451bb046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNjdWxwdG9yfGVufDB8fDB8fHww&w=1000&q=80",
    //       "students": 38
    //     },
    //     {
    //       "name": "Calligraphy",
    //       "description": "Discover the art of beautiful handwriting and calligraphic designs.",
    //       "category": "popular",
    //       "image": "https://images.unsplash.com/photo-1576437660573-a33d2a2f93d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    //       "students": 35
    //     },
    //     {
    //       "name": "Glassblowing",
    //       "description": "Experience the ancient art of glassblowing and create unique glass pieces.",
    //       "category": "popular",
    //       "image": "https://images.unsplash.com/photo-1483639130939-150975af84e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3MlMjBibG93aW5nfGVufDB8fDB8fHww&w=1000&q=80",
    //       "students": 32
    //     }
    //   ];



    return (
        <section className="popular-classes  dark:bg-transparent py-10 my-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-16 text-center">Popular Art and Craft Classes</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {popularClass?.map((item, i) => (
                        <div className="card-body border rounded-xl" key={i}>
                            <figure className="h-72">
                                <img src={item.image} alt={item.image} className="object-cover w-full h-full" />
                            </figure>
                            <h3 className="text-2xl font-bold">{item.name}</h3>
                            <p className="text-gray-700 font-semibold">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularClass;