const Section2 = ({
    Sec_2_ProductDetails,
    Sec_2_Additionals,
    Sec_2_AboutProduct,
}) => {
    return (
        <>
            <section className="my-10 mx-[1em] lg:mx-[8em] xl:mx-[8em] 2xl:mx-[10em] p-5 bg-[#F9F9F9] shadow-md rounded-md">
                <h2 className="text-4xl font-primary text-black font-medium">
                    Product Details
                </h2>
                <div className="grid grid-cols-12 gap-3 my-8">
                    {Object.entries(Sec_2_ProductDetails).map(
                        ([key, value], index) => (
                            <div
                                key={index}
                                className="col-span-12 md:col-span-6"
                            >
                                <div className="flex space-x-10">
                                    <div className="w-1/2">
                                        <h4 className="text-[15px] font-primary font-medium capitalize">
                                            {key.replace(/_/g, " ")}
                                        </h4>
                                    </div>
                                    <div className="my-auto w-1/2">
                                        <p>{value}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <hr />
                <div className="grid grid-cols-12 gap-3 my-3">
                    <div className="col-span-12 md:col-span-6">
                        <h4 className="text-[15px] font-primary font-medium capitalize">
                            Additional Informations
                        </h4>
                        <div className="mt-3 space-y-2">
                            {Object.entries(Sec_2_Additionals).map(
                                ([key, value], index) => (
                                    <div
                                        key={index}
                                        className="col-span-12 md:col-span-6"
                                    >
                                        <div className="flex space-x-10">
                                            <div className="w-1/2">
                                                <h4 className="text-md lg:text-md font-primary capitalize">
                                                    {key.replace(/_/g, " ")}
                                                </h4>
                                            </div>
                                            <div className="my-auto w-1/2">
                                                <p>{value}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <h4 className="text-md lg:text-md font-primary capitalize font-medium">
                            About the Product
                        </h4>
                        <p className="mt-3">{Sec_2_AboutProduct}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section2;
