import { Link } from "@inertiajs/react";

const Suggestions = ({ Suggestions }) => {
    return (
        <>
            <div className="absolute w-full mt-2 bg-white shadow-md rounded-md p-3 space-y-3">
                {Suggestions.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 p-2 border-2 border-[#f6f6f6] rounded-md"
                    >
                        <div className="w-20 bg-[#DBDBDB] rounded-md p-2">
                            <img src={item.image} alt="asa" />
                        </div>
                        <div className=" rounded-md flex-1 space-y-1 my-auto">
                            <p className="text-[12px] font-primary text-[#556174]">
                                {item.part_number}
                            </p>
                            <p className="text-sm font-medium font-main text-primary">
                                {item.name}
                            </p>
                            <div className="flex space-x-2">
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
                        <div className="rounded-md p-0 md:p-2 my-auto flex md:block space-x-2 md:space-x-0 md:space-y-3">
                            <Link href={route("view-product", item.id)}>
                                <button className="border-primary border-[1px] rounded-md text-[13px] w-32 block text-primary font-medium font-primary p-2">
                                    View Product
                                </button>
                            </Link>
                            <button className="bg-secondary rounded-md text-[13px] w-32 block text-black font-medium font-primary p-2">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Suggestions;
