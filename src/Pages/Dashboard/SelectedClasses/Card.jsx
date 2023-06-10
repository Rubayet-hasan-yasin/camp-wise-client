
const Card = ({selectedClass}) => {
    return (
        <div>
            <div className={`${selectedClass.availableSeats == 0 && "bg-red-600 dark:bg-red-600"} card w-96 bg-base-100 dark:bg-transparent dark:border border shadow-xl`}>
                <figure className="h-64">
                    <img src={selectedClass.classImage} alt="profile" className="object-cover w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{selectedClass.className}</h2>
                    <p>Instructor: {selectedClass.instructorName}</p>
                    
                    <p>Fee: ${selectedClass.price}</p>
                    <div className="card-actions justify-end">
                        <button  className="btn btn-sm">Delete</button>
                        <button  className="btn btn-sm btn-primary">Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;