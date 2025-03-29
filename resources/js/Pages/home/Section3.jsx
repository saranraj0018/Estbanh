const Section3 = ({Sec3_Products}) => {
    return (
        <>
            <section className="px-[1em] lg:px-[6em] xl:px-[6em] 2xl:px-[10em] py-5 space-y-3">
                <div className="flex justify-center">
                    <h2 className="w-max text-lg py-2 px-3 font-medium tracking-widest text-[#454545] rounded-full bg-[#EDEEF1] font-primary">
                        BEST SELLERS
                    </h2>
                </div>
                <h3 className="text-primary text-3xl font-primary font-medium text-center heading-with-lines">
                    Popular Products of the Month
                </h3>
            </section>
            <section className="px-[1em] lg:px-[6em] xl:px-[6em] 2xl:px-[10em] space-y-3">
                <div className="grid grid-cols-12 gap-3">
                    {Sec3_Products.map((item, index)=>(
                        <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3 bg-[#EDEEF1] rounded-2xl p-2 space-y-2">
                            <h4 className="text-lg font-primary font-medium">
                                {item.Heading}
                            </h4>
                            <p className="font-primary text-sm">
                                {item.Description}
                            </p>
                            <div className="flex justify-between space-x-2">
                                <button className="bg-secondary text-black font-primary font-medium text-sm rounded-2xl py-1 px-2 h-min">
                                    Shop now
                                </button>
                                <img src={item.Image} alt=""/>
                            </div>
                        </div>
                    ))}

                </div>
            </section>


        </>
    )
}

export default Section3
