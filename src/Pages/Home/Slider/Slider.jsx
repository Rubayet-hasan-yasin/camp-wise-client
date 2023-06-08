import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { Autoplay, Pagination, Navigation } from "swiper";
const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
            <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://1.bp.blogspot.com/-bGq4sBrCzmA/YMsNGuw_MyI/AAAAAAACbd0/_VEs6S1LGbE7ZJAoFrQjb93FdmlYBvEngCLcBGAsYHQ/s16000/bug%2Bobservation%2Bbox.jpg'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Bug Observation Box</h2>

                            
                            <p className="text-white">This bug observation box by Barley and Birch is easy and educational. Find out what types of bugs live nearby by catching them and observing them for a little while. The mesh side provides lots of air for the bugs, so you don&apos;t need to worry about hurting them. Just catch, observe, and release! Decorate your box with crafty flowers and leaves. Don&apos;t forget to put some real ones inside for the bugs to munch on while they&apos;re there.</p>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://1.bp.blogspot.com/-pRn7cRi0Skk/YMsJEAswWFI/AAAAAAACbbk/hPV5dYoCK6YOHs-o8jAFmHvwnHvMoJsJQCLcBGAsYHQ/s16000/nature%2Bsuncatcher.jpg'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Nature Suncatcher Craft</h2>


                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://1.bp.blogspot.com/-DF56tqqmS6I/YMsK7OGCryI/AAAAAAACbcc/ynoTxq2rva4awH-N0YPffpkpAPMrKKwwQCLcBGAsYHQ/s16000/clay%2Bleaf%2Bbowl.jpg'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Clay Leaf Bowl</h2>


                            <p className="text-white">Our clay leaf bowl would make an excellent summer camp craft for kids. With some air-dry clay, leaves, and a bit of paint, you can make and decorate your own bowl to your liking. Use it at home to hold change, keys, jewelry, or give it to someone as a gift.</p>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://1.bp.blogspot.com/-oBWJEeF-AGc/YMsLw8ZOTrI/AAAAAAACbc8/ifka4ncofoEjdy4JmWCyZ0zN5-XBTT0-wCLcBGAsYHQ/s16000/watermelon%2Bcard%2Bcraft.jpg'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Watermelon Card</h2>


                            <p className="text-white">Tell someone they&apos;re one in a melon with this totally adorable watermelon card from The Best Ideas for Kids. What a fun project for kids who&apos;ve gone away to summer camp who are perhaps missing their family or friends. Of course, you can make it for your own backyard summer camp, too.
</p>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://1.bp.blogspot.com/-Jeb-v5rspRo/YMsMk0q5yOI/AAAAAAACbdc/wS3kqNHIM2EXUxZG9mTsyGcZPuJsiSCyACLcBGAsYHQ/s16000/ice%2Bcream%2Bpainted%2Brocks.jpg'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Ice Cream Painted Rocks</h2>


                            <p className="text-white">Don't you love all the fun ways you can paint rocks to make something cool? These ice cream painted rocks from Projects with Kids are perfect for summer. Provide some flat rocks, paint, and paint pens, and get to work making silly little ice creams with faces. Their watermelon painted rocks are super cute, too!

</p>

                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;