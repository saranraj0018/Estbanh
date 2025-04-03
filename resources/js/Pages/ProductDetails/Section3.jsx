const heartIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 28 28"
        fill="none"
    >
        <path
            d="M24.3494 9.6876C24.3494 6.82985 21.9356 4.5126 18.9582 4.5126C16.733 4.5126 14.8217 5.8075 13.9994 7.65555C13.1772 5.8075 11.2659 4.5126 9.03946 4.5126C6.06441 4.5126 3.64941 6.82985 3.64941 9.6876C3.64941 17.9906 13.9994 23.4876 13.9994 23.4876C13.9994 23.4876 24.3494 17.9906 24.3494 9.6876Z"
            fill="white"
            stroke="black"
            stroke-width="0.7"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

const Section3 = ({ Sec_3_ProductData }) => {
    return (
        <>
            <section className="my-10 px-[1em] lg:px-[8em] xl:px-[8em] 2xl:px-[10em] space-y-3">
                <div className="flex justify-center">
                    <h2 className="w-max text-md py-2 px-3 tracking-widest text-[#454545] rounded-full bg-[#EDEEF1] font-primary">
                        RECENTLY VIEWED
                    </h2>
                </div>
                <h3 className="text-primary text-3xl font-primary font-medium text-center heading-with-lines">
                    Previously Viewed Products
                </h3>

                <div className="grid grid-cols-12 gap-3">
                    {Sec_3_ProductData.map((item, index) => (
                        <div
                            key={index}
                            className="col-span-12 md:col-span-3 p-3 border-[1px] border-[#6B798C] rounded-md space-y-2"
                        >
                            <div className="p-2 bg-[#F9F9F9] rounded-md relative">
                                <img
                                    src={item.ProductImage}
                                    className="mx-auto"
                                    alt={item.ProductName}
                                />
                                <div className="my-auto bg-[#FFEEC6] p-1 rounded-full w-max absolute top-[5px] right-[5px]">
                                    {heartIcon}
                                </div>
                            </div>
                            <p className="text-[13px] font-medium font-primary text-[#556174]">
                                {item.ProductCode}
                            </p>
                            <h4 className="text-primary font-medium font-primary text-black text-[13px] md:text-md lg:text-lg">
                                {item.ProductName}
                            </h4>
                            <div className="flex md:flex-col lg:flex-row gap-3 justify-between py-3">
                                <p className="font-primary font-medium text-2xl">
                                    {item.ProductPrice}
                                    <sub className="line-through text-sm text-[#556174] font-primary ms-1 font-medium">
                                        {item.Productcut}
                                    </sub>
                                </p>
                                <div className="flex space-x-2 justify-end">
                                    <button className="px-2 md:px-3 rounded-md text-primary border-[1px] border-primary text-lg md:text-xl">
                                        -
                                    </button>
                                    <p className="text-primary text-xl font-medium border-b-[1px] border-[#8996A7] px-2">
                                        1
                                    </p>
                                    <button className="px-2 md:px-3 rounded-md text-black bg-secondary text-lg md:text-xl">
                                        +
                                    </button>
                                </div>
                            </div>
                            <button className="border-primary border-[1px] rounded-md text-md w-full text-primary font-medium font-primary p-2">
                                Add to Cart
                            </button>
                            <button className="bg-secondary rounded-md text-md w-full text-black font-medium font-primary p-2">
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Section3;
