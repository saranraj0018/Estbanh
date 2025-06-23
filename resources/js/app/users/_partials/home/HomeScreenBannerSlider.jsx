import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import {
    Section4Product as Section4_Product1,
    Section4Background,
} from "@/public/images/home/index";

const HomeScreenBannerSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const Sec4_Products = [
        {
            Caption: "Tech Upgraded, Hassle-Free!",
            Heading: "Empowering Your Projects with Quality Parts!",
            Discount: "80%",
            Image: Section4_Product1,
        },
    ];

    return (
        <section className="px-[10em] py-10">
            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.activeIndex)
                    }
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    className="relative"
                >
                    {Sec4_Products.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                style={{
                                    background: `url(${Section4Background})`,
                                }}
                                className="bg-cover bg-center bg-no-repeat rounded-3xl p-8"
                            >
                                <div className="w-full flex">
                                    <div className="space-y-3 my-auto">
                                        <h2 className="text-secondary text-sm md:text-md font-main">
                                            {item.Caption}
                                        </h2>
                                        <h3 className="text-white text-3xl font-main font-medium uppercase">
                                            {item.Heading}
                                        </h3>
                                        <p className="text-white text-md font-main font-normal">
                                            Up to{" "}
                                            <span className="text-secondary">
                                                {item.Discount}
                                            </span>{" "}
                                            OFF
                                        </p>
                                    </div>
                                    <div className="col-span-12 md:col-span-4">
                                        <div className="flex justify-center">
                                            <img
                                                src={item.Image}
                                                alt=""
                                                className="w-2/4"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* <button className="swiper-button-prev absolute left-0 top-1/2 transform z-10 bg-white p-10 scale-[0.3] lg:scale-[0.5] rounded-full shadow-lg">
                <ChevronLeft size={24} />
            </button>
            <button className="swiper-button-next absolute right-4 top-1/2 transform z-10 bg-white p-10 scale-[0.3] lg:scale-[0.5] rounded-full shadow-lg">
                <ChevronRight size={24} />
            </button> */}

                {/* <div className="absolute left-14 bottom-[50px] md:bottom-[60px] z-10 transform -translate-x-1/2 flex gap-2">
                {[...Array(3)].map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all bg-white ${
                            activeIndex === index ? "w-4" : "w-2"
                        }`}
                        onClick={() => swiperInstance?.slideTo(index)}
                    />
                ))}
            </div> */}
            </div>
        </section>
    );
};

export default HomeScreenBannerSlider;
