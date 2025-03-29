const Section2 = ({ Sec2_Products }) => {
    return (
        <>
            <section className="px-[1em] lg:px-[6em] xl:px-[6em] 2xl:px-[10em] my-10 space-y-5">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-6">
                        <div className="flex bg-[url(../../public/assets/home/ProductBG1.png)] bg-cover bg-center bg-no-repeat rounded-2xl p-8 h-full">
                            <div className="space-y-4 my-auto">
                                <p className="text-black font-primary ps-2 border-s-2 border-white text-sm">
                                    {Sec2_Products[0].Caption}
                                </p>
                                <h2 className="text-[16px] lg:text-2xl text-black font-primary font-medium">
                                    {Sec2_Products[0].Heading}
                                </h2>
                                <button className="bg-white text-black font-primary font-medium py-1 px-3 rounded-full text-[12px] md:text-[15px]">
                                    {Sec2_Products[0].ButtonName}
                                </button>
                            </div>
                            <div className="flex justify-end my-auto">
                                <img src={Sec2_Products[0].Image} className="h-min" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="flex bg-[url(../../public/assets/home/ProductBG.png)] bg-cover bg-center bg-no-repeat rounded-2xl p-8 h-full">
                            <div className="space-y-4 my-auto">
                                <p className="text-white font-primary ps-2 border-s-2 border-white text-sm">
                                    {Sec2_Products[1].Caption}
                                </p>
                                <h2 className="text-[16px] lg:text-2xl text-white font-primary font-medium">
                                    {Sec2_Products[1].Heading}
                                </h2>
                                <button className="bg-secondary text-black font-primary font-medium py-1 px-3 rounded-full text-[12px] md:text-[15px]">
                                    {Sec2_Products[1].ButtonName}
                                </button>
                            </div>
                            <div className="flex justify-end my-auto w-4/6">
                                <img src={Sec2_Products[1].Image} className="md:w-5/6 h-min" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-4">
                        <div className="flex bg-[url(../../public/assets/home/pbg1.png)] bg-cover bg-center bg-no-repeat rounded-2xl p-4 h-full">
                            <div className="space-y-4 my-auto">
                                <p className="text-black font-primary ps-2 border-s-2 border-black text-sm">
                                    {Sec2_Products[2].Caption}
                                </p>
                                <h2 className="text-sm md:text-md lg:text-lg text-black font-primary font-medium">
                                    {Sec2_Products[2].Heading}
                                </h2>
                                <button className="bg-secondary text-black font-primary font-medium py-1 px-3 rounded-full text-[12px] md:text-[15px]">
                                    {Sec2_Products[2].ButtonName}
                                </button>
                            </div>
                            <div className="flex justify-end my-auto">
                                <img src={Sec2_Products[2].Image} className="w-44 h-min" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <div className="flex bg-[url(../../public/assets/home/pbg2.png)] bg-cover bg-center bg-no-repeat rounded-2xl p-4 h-full">
                            <div className="space-y-4 my-auto">
                                <p className="text-black font-primary ps-2 border-s-2 border-black text-sm">
                                    {Sec2_Products[3].Caption}
                                </p>
                                <h2 className="text-sm md:text-md lg:text-lg text-black font-primary font-medium">
                                    {Sec2_Products[3].Heading}
                                </h2>
                                <button className="bg-secondary text-black font-primary font-medium py-1 px-3 rounded-full text-[12px] md:text-[15px]">
                                    {Sec2_Products[3].ButtonName}
                                </button>
                            </div>
                            <div className="flex justify-end my-auto">
                                <img src={Sec2_Products[3].Image} className="w-44 h-min" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <div className="flex bg-[url(../../public/assets/home/pbg3.png)] bg-cover bg-center bg-no-repeat rounded-2xl p-4 h-full">
                            <div className="space-y-4 my-auto">
                                <p className="text-black font-primary ps-2 border-s-2 border-black text-sm">
                                    {Sec2_Products[4].Caption}
                                </p>
                                <h2 className="text-sm md:text-md lg:text-lg text-black font-primary font-medium">
                                    {Sec2_Products[4].Heading}
                                </h2>
                                <button className="bg-secondary text-black font-primary font-medium py-1 px-3 rounded-full text-[12px] md:text-[15px]">
                                    {Sec2_Products[4].ButtonName}
                                </button>
                            </div>
                            <div className="flex justify-end my-auto">
                                <img src={Sec2_Products[4].Image} className="w-44 h-min" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2
