import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const MySlider = ({ Sec4_Products }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <section className="relative px-[1em] lg:px-[6em] xl:px-[6em] 2xl:px-[10em] py-10">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                className="relative"
            >
                {Sec4_Products.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[url(../../public/assets/home/Sec4-BG.png)] bg-cover bg-center bg-no-repeat rounded-lg p-8">
                            <div className="grid grid-cols-12 gap-3">
                                <div className="col-span-12 md:col-span-8 space-y-3 my-auto">
                                    <h2 className="text-white text-sm md:text-md font-primary">
                                        {item.Caption}
                                    </h2>
                                    <h3 className="text-white text-md md:text-3xl font-primary font-medium uppercase">
                                        {item.Heading}
                                    </h3>
                                    <p className="text-white text-sm md:text-lg font-primary font-medium">
                                        Up to {item.Discount} OFF
                                    </p>
                                </div>
                                <div className="col-span-12 md:col-span-4">
                                    <div className="flex justify-center">
                                        <img
                                            src={item.Image}
                                            alt=""
                                            className="w-3/4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* >>>>>>>>>>>>>>>>>>>> Navigation Buttons */}
            {/* >>>>>>>>>>>>>>>>>>>> Navigation Buttons */}
            {/* >>>>>>>>>>>>>>>>>>>> Navigation Buttons */}

            <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/5 md:-translate-y-1/4 z-10 bg-white p-10 scale-[0.3] lg:scale-[0.5] rounded-full shadow-lg">
                <ChevronLeft size={24} />
            </button>
            <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/5 md:-translate-y-1/4 z-10 bg-white p-10 scale-[0.3] lg:scale-[0.5] rounded-full shadow-lg">
                <ChevronRight size={24} />
            </button>

            {/* >>>>>>>>>>>>>>>>>>>>>> Custom Pagination */}
            {/* >>>>>>>>>>>>>>>>>>>>>> Custom Pagination */}
            {/* >>>>>>>>>>>>>>>>>>>>>> Custom Pagination */}

            <div className="absolute bottom-4 left-1/2 lg:left-[155px] bottom-[50px] md:bottom-[60px] z-10 transform -translate-x-1/2 flex gap-2">
                {[...Array(3)].map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all bg-white ${
                            activeIndex === index ? "w-4" : "w-2"
                        }`}
                        onClick={() => swiperInstance?.slideTo(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default MySlider;
