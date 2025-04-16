import BanSideImg from "../../../../public/assets/home/banner-sider.png";

const SearchIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 19 19" fill="none">
        <path d="M9.29415 16.1913C13.0173 16.1913 16.0356 13.1731 16.0356 9.44991C16.0356 5.72673 13.0173 2.7085 9.29415 2.7085C5.57097 2.7085 2.55273 5.72673 2.55273 9.44991C2.55273 13.1731 5.57097 16.1913 9.29415 16.1913Z" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.9834 14.4888L16.6264 17.125" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);
const Section1 = ({ Username, myArray, Sec1_Products }) => {
    return (
        <>

            <section className="px-[1em] lg:px-[6em] xl:px-[6em] 2xl:px-[10em] py-16 md:py-5 bg-[#f8f8f9]">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-7 my-auto space-y-5">
                        <h2 className="text-2xl lg:text-4xl text-primary font-primary font-medium">
                            Hey {Username},<br />
                            looking for the right parts?
                        </h2>
                        <p className="text-primary font-medium text-[#46505E] text-lg">
                            Find all the parts and accessories we stock for your machine
                        </p>
                        <div className="p-1 rounded-[10px] w-full md:w-4/5 flex space-x-2 bg-white drop-shadow-lg">
                            <select name="" id="" className="border-none rounded-md focus:outline-none focus:ring-0 focus:ring-white text-zinc-500 text-[12px] md:text-[15px] pe-2 md:pe-auto w-1/2">
                                <option value="Make">Make</option>
                                <option value="Option1">Option1</option>
                                <option value="Option2">Option2</option>
                            </select>
                            <select name="" id="" className="border-none rounded-md focus:outline-none focus:ring-0 focus:ring-white text-zinc-500 text-[12px] md:text-[15px] me-2 md:pe-auto w-full">
                                <option value="Make">Select your Model</option>
                                <option value="Option1">Option1</option>
                                <option value="Option2">Option2</option>
                            </select>
                            <button className="text-zinc-400 text-[13px] font-primary">
                                Clear
                            </button>
                            <button className="bg-primary text-white font-primary py-2 px-1 md:px-3 flex font-medium my-auto rounded-[10px] text-[12px] md:text-[15px]">
                                <div className="my-auto me-1">
                                    {SearchIcon}
                                </div>
                                Search
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <p className="text-primary font-primary font-medium">Popular Searches:</p>
                            <ul className="flex gap-2 flex-wrap">
                                {myArray.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="py-[2px] px-[3px] rounded-[5px] bg-white font-primary text-[#556174] font-medium text-sm border-[1px] border-[#D6DAE1]"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5 my-auto">
                        <img src={BanSideImg} alt="" className="w-full md:w-5/6" />
                    </div>
                </div>

            </section>
            <section className="bg-[#FFEEC6] py-5 px-[1em] lg:px-[6em] xl:px-[6em] 2xl:px-[10em]">
                <div className="grid grid-cols-12 gap-3">
                    {Sec1_Products.map((product, index) => (
                        <div key={index} className="col-span-12 md:col-span-4">
                            <div className="flex space-x-3">
                                <div className="w-1/4 my-auto">
                                    <img src={product.image} alt="" className="" />
                                </div>
                                <div className="space-y-1 my-auto">
                                    <h2 className="text-md md:text-sm lg:text-lg font-primary font-medium">
                                        {product.name}
                                    </h2>
                                    <p>Save {product.offer} Off</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Section1

