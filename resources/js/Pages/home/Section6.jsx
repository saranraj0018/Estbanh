import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import WCU_Icon4 from "../../../../public/assets/home/WCU-I4.png";

const YellowQuote = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="36"
        viewBox="0 0 48 36"
        fill="none"
    >
        <path
            d="M9.2904 16.8324H2.8902V0.586182H22.5V11.712C22.5 23.0064 14.6196 32.7912 3.5724 35.142C2.583 35.3526 1.9884 35.4138 1.9884 35.4138L0 30.5694C8.7846 26.1894 9.2904 16.8324 9.2904 16.8324ZM34.788 16.8324H28.3878V0.586182H48V11.712C48 23.0064 40.119 32.7912 29.0718 35.142C28.0824 35.3526 27.4884 35.4138 27.4884 35.4138L25.5 30.5694C34.2816 26.1894 34.788 16.8324 34.788 16.8324Z"
            fill="#FFB02E"
        />
    </svg>
);
const BlueQuote = (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M15.2904 28.8324H8.8902V12.5862H28.5V23.712C28.5 35.0064 20.6196 44.7912 9.5724 47.142C8.583 47.3526 7.9884 47.4138 7.9884 47.4138L6 42.5694C14.7846 38.1894 15.2904 28.8324 15.2904 28.8324ZM40.788 28.8324H34.3878V12.5862H54V23.712C54 35.0064 46.119 44.7912 35.0718 47.142C34.0824 47.3526 33.4884 47.4138 33.4884 47.4138L31.5 42.5694C40.2816 38.1894 40.788 28.8324 40.788 28.8324Z" fill="#3C4450"/>
    </svg>
);

const Section6 = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <section className="my-5 py-5 bg-[url('../../public/assets/home/feed-bg.png')] bg-cover bg-center bg-no-repeat">
                <div className="px-[1em] lg:px-[6em] xl:px-[6em] 2xl:px-[10em] space-y-2">
                    <h2 className="text-black text-3xl font-primary font-medium">
                        What Our Customers Say!
                    </h2>
                    <p>Hear it Straight from Our Happy Customers</p>
                </div>

                <div className="relative px-[1em] lg:px-[6em] xl:px-[6em] 2xl:px-[10em]">
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
                        <SwiperSlide>
                            <div className="rounded-lg py-10">
                                <div className="grid grid-cols-12 gap-3">
                                    <div className="col-span-6 md:col-span-3 my-auto">
                                        <div className="p-5 rounded-lg shadow-md bg-white">
                                            <div className="mb-8">
                                                {YellowQuote}
                                            </div>
                                            <p className="text-primary font-primary text-sm text-justify">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Rem est voluptatibus ad ipsum
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                            </p>
                                            <div className="mt-3 flex">
                                                <div className="rounded-full w-1/4">
                                                    <img
                                                        src={WCU_Icon4}
                                                        alt=""
                                                        className=""
                                                    />
                                                </div>
                                                <div className="my-auto w-3/4">
                                                    <h4 className="text-primary font-primary font-medium text-sm">
                                                        Divya R
                                                    </h4>
                                                    <p className="text-zinc-500 font-primary text-[12px]">
                                                        Great Value for Money
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3 my-auto">
                                        <div className="p-5 rounded-lg shadow-md bg-white">
                                            <div className="mb-8">
                                                {BlueQuote}
                                            </div>
                                            <p className="text-primary font-primary text-sm text-justify">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Rem est voluptatibus ad ipsum
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                            </p>
                                            <div className="mt-3 flex">
                                                <div className="rounded-full w-1/4">
                                                    <img
                                                        src={WCU_Icon4}
                                                        alt=""
                                                        className=""
                                                    />
                                                </div>
                                                <div className="my-auto w-3/4">
                                                    <h4 className="text-primary font-primary font-medium text-sm">
                                                        Divya R
                                                    </h4>
                                                    <p className="text-zinc-500 font-primary text-[12px]">
                                                        Great Value for Money
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3 space-y-3 my-auto">
                                        <div className="p-5 rounded-lg shadow-md bg-white">
                                            <div className="mb-8">
                                                {YellowQuote}
                                            </div>
                                            <p className="text-primary font-primary text-sm text-justify">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Rem est voluptatibus ad ipsum
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi.
                                            </p>
                                            <div className="mt-3 flex">
                                                <div className="rounded-full w-1/4">
                                                    <img
                                                        src={WCU_Icon4}
                                                        alt=""
                                                        className=""
                                                    />
                                                </div>
                                                <div className="my-auto w-3/4">
                                                    <h4 className="text-primary font-primary font-medium text-sm">
                                                        Divya R
                                                    </h4>
                                                    <p className="text-zinc-500 font-primary text-[12px]">
                                                        Great Value for Money
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-lg shadow-md bg-white">
                                            <div className="mb-8">
                                                {BlueQuote}
                                            </div>
                                            <p className="text-primary font-primary text-sm text-justify">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Rem est voluptatibus ad ipsum
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                            </p>
                                            <div className="mt-3 flex">
                                                <div className="rounded-full w-1/4">
                                                    <img
                                                        src={WCU_Icon4}
                                                        alt=""
                                                        className=""
                                                    />
                                                </div>
                                                <div className="my-auto w-3/4">
                                                    <h4 className="text-primary font-primary font-medium text-sm">
                                                        Divya R
                                                    </h4>
                                                    <p className="text-zinc-500 font-primary text-[12px]">
                                                        Great Value for Money
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3 space-y-3 my-auto">
                                        <div className="p-5 rounded-lg shadow-md bg-white">
                                            <div className="mb-8">
                                                {BlueQuote}
                                            </div>
                                            <p className="text-primary font-primary text-sm text-justify">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Rem est voluptatibus ad ipsum
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                            </p>
                                            <div className="mt-3 flex">
                                                <div className="rounded-full w-1/4">
                                                    <img
                                                        src={WCU_Icon4}
                                                        alt=""
                                                        className=""
                                                    />
                                                </div>
                                                <div className="my-auto w-3/4">
                                                    <h4 className="text-primary font-primary font-medium text-sm">
                                                        Divya R
                                                    </h4>
                                                    <p className="text-zinc-500 font-primary text-[12px]">
                                                        Great Value for Money
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-lg shadow-md bg-white">
                                            <div className="mb-8">
                                                {YellowQuote}
                                            </div>
                                            <p className="text-primary font-primary text-sm text-justify">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Rem est voluptatibus ad ipsum
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                            </p>
                                            <div className="mt-3 flex">
                                                <div className="rounded-full w-1/4">
                                                    <img
                                                        src={WCU_Icon4}
                                                        alt=""
                                                        className=""
                                                    />
                                                </div>
                                                <div className="my-auto w-3/4">
                                                    <h4 className="text-primary font-primary font-medium text-sm">
                                                        Divya R
                                                    </h4>
                                                    <p className="text-zinc-500 font-primary text-[12px]">
                                                        Great Value for Money
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded-lg py-10">
                                <div className="grid grid-cols-12 gap-3">
                                    <div className="col-span-6 md:col-span-3 my-auto">
                                        <div className="p-5 rounded-lg shadow-md bg-white">
                                            <div className="mb-8">
                                                {YellowQuote}
                                            </div>
                                            <p className="text-primary font-primary text-sm text-justify">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Rem est voluptatibus ad ipsum
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                            </p>
                                            <div className="mt-3 flex">
                                                <div className="rounded-full w-1/4">
                                                    <img
                                                        src={WCU_Icon4}
                                                        alt=""
                                                        className=""
                                                    />
                                                </div>
                                                <div className="my-auto w-3/4">
                                                    <h4 className="text-primary font-primary font-medium text-sm">
                                                        Divya R
                                                    </h4>
                                                    <p className="text-zinc-500 font-primary text-[12px]">
                                                        Great Value for Money
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3 my-auto">
                                        <div className="p-5 rounded-lg shadow-md bg-white">
                                            <div className="mb-8">
                                                {BlueQuote}
                                            </div>
                                            <p className="text-primary font-primary text-sm text-justify">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Rem est voluptatibus ad ipsum
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                            </p>
                                            <div className="mt-3 flex">
                                                <div className="rounded-full w-1/4">
                                                    <img
                                                        src={WCU_Icon4}
                                                        alt=""
                                                        className=""
                                                    />
                                                </div>
                                                <div className="my-auto w-3/4">
                                                    <h4 className="text-primary font-primary font-medium text-sm">
                                                        Divya R
                                                    </h4>
                                                    <p className="text-zinc-500 font-primary text-[12px]">
                                                        Great Value for Money
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3 space-y-3 my-auto">
                                        <div className="p-5 rounded-lg shadow-md bg-white">
                                            <div className="mb-8">
                                                {YellowQuote}
                                            </div>
                                            <p className="text-primary font-primary text-sm text-justify">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Rem est voluptatibus ad ipsum
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi.
                                            </p>
                                            <div className="mt-3 flex">
                                                <div className="rounded-full w-1/4">
                                                    <img
                                                        src={WCU_Icon4}
                                                        alt=""
                                                        className=""
                                                    />
                                                </div>
                                                <div className="my-auto w-3/4">
                                                    <h4 className="text-primary font-primary font-medium text-sm">
                                                        Divya R
                                                    </h4>
                                                    <p className="text-zinc-500 font-primary text-[12px]">
                                                        Great Value for Money
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-lg shadow-md bg-white">
                                            <div className="mb-8">
                                                {BlueQuote}
                                            </div>
                                            <p className="text-primary font-primary text-sm text-justify">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Rem est voluptatibus ad ipsum
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                            </p>
                                            <div className="mt-3 flex">
                                                <div className="rounded-full w-1/4">
                                                    <img
                                                        src={WCU_Icon4}
                                                        alt=""
                                                        className=""
                                                    />
                                                </div>
                                                <div className="my-auto w-3/4">
                                                    <h4 className="text-primary font-primary font-medium text-sm">
                                                        Divya R
                                                    </h4>
                                                    <p className="text-zinc-500 font-primary text-[12px]">
                                                        Great Value for Money
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3 space-y-3 my-auto">
                                        <div className="p-5 rounded-lg shadow-md bg-white">
                                            <div className="mb-8">
                                                {BlueQuote}
                                            </div>
                                            <p className="text-primary font-primary text-sm text-justify">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Rem est voluptatibus ad ipsum
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                            </p>
                                            <div className="mt-3 flex">
                                                <div className="rounded-full w-1/4">
                                                    <img
                                                        src={WCU_Icon4}
                                                        alt=""
                                                        className=""
                                                    />
                                                </div>
                                                <div className="my-auto w-3/4">
                                                    <h4 className="text-primary font-primary font-medium text-sm">
                                                        Divya R
                                                    </h4>
                                                    <p className="text-zinc-500 font-primary text-[12px]">
                                                        Great Value for Money
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-lg shadow-md bg-white">
                                            <div className="mb-8">
                                                {YellowQuote}
                                            </div>
                                            <p className="text-primary font-primary text-sm text-justify">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Rem est voluptatibus ad ipsum
                                                nostrum recusandae eos! Nulla
                                                impedit harum commodi, eveniet
                                                mollitia a ipsum hic est,
                                                quaerat, at veritatis soluta.
                                            </p>
                                            <div className="mt-3 flex">
                                                <div className="rounded-full w-1/4">
                                                    <img
                                                        src={WCU_Icon4}
                                                        alt=""
                                                        className=""
                                                    />
                                                </div>
                                                <div className="my-auto w-3/4">
                                                    <h4 className="text-primary font-primary font-medium text-sm">
                                                        Divya R
                                                    </h4>
                                                    <p className="text-zinc-500 font-primary text-[12px]">
                                                        Great Value for Money
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 md:-translate-y-1/4 z-10 bg-white p-10 scale-[0.3] lg:scale-[0.5] rounded-full shadow-lg">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 md:-translate-y-1/4 z-10 bg-white p-10 scale-[0.3] lg:scale-[0.5] rounded-full shadow-lg">
                        <ChevronRight size={24} />
                    </button>

                    {/* Custom Pagination */}
                    <div className="absolute bottom-4 left-1/2 lg:left-[155px] bottom-[0] z-10 transform -translate-x-1/2 flex gap-2">
                        {swiperInstance &&
                            [...Array(swiperInstance?.slides.length || 0)].map(
                                (_, index) => (
                                    <button
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all bg-white ${
                                            activeIndex === index
                                                ? "w-4 bg-blue-900"
                                                : "w-2 bg-zinc-500"
                                        }`}
                                        onClick={() =>
                                            swiperInstance &&
                                            swiperInstance.slideTo(index)
                                        }
                                    />
                                )
                            )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section6;
