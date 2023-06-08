import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";



const Testimonials = () => {
    const testimonials = [
        {
            name: 'Emily Johnson',
            photo: 'https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            content: 'Attending the art and craft summer camp at this school was a fantastic experience. I learned various techniques and created beautiful artworks. The instructors were knowledgeable and supportive throughout the camp. I highly recommend this summer camp to any young artist!',
        },
        {
            name: 'Jacob Smith',
            photo: 'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            content: 'The art and craft summer camp exceeded my expectations. It was a perfect blend of learning and fun activities. I enjoyed working with different art materials and exploring my creativity. The camp counselors were friendly and made the whole experience enjoyable. I can\'t wait to join again next year!',
        }
        // Add more testimonials...
    ];

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}

            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
        >
            {
                testimonials.map((item, i) => <SwiperSlide key={i}>

                    <div className="hero h-[60vh]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1624436048867-3cab158ec71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)" }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring-8 ring-offset-base-100 ring-offset-4">
                                        <img src={item.photo}/>
                                    </div>
                                </div>
                                <h1 className="mb-5 text-5xl text-white font-bold">{item.name}</h1>
                                <p className="mb-5 text-slate-100">{item.content}</p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
    );
};

export default Testimonials;
