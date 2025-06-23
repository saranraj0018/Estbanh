import { useEffect, useState } from "react";
import { TimeIcon, TradeIcon, HeartIcon } from "@/components/icons";
import UserLayout from "@/shared/layouts/UserLayout";
import { Minus, Plus } from "lucide-react";
import { Head, useForm } from "@inertiajs/react";

const ViewProduct = ({ product }) => {
    // Set initial main image to the first image in the array
    const [mainImage, setMainImage] = useState(product.image);

    const { data, setData, reset } = useForm({
        quantity: 1,
    });


    const decrement = (e) => {
        e.preventDefault();
        console.log(data);


        if(data.quantity > 1) {
            setData("quantity", data.quantity - 1)
        }
        return true
    }


    const increment = (e) => {
        e.preventDefault();
        setData("quantity", data.quantity + 1)
        return true
    }

    return (
        <UserLayout>

          <Head title={product.name} />


            <section className="px-[8em]">
                <div className="mt-[1em] flex items-center gap-[4em] bg-white p-5 rounded-lg border-1 border-gray-300">
                    <div className="flex gap-[3em] items-center w-1/2 min-h-[50vh]">
                        <div className="w-32 h-[50vh] overflow-auto flex flex-col gap-5">
                            {[...product?.images, product?.image]?.map(
                                (item, index) => (
                                    <img
                                        key={index}
                                        src={item}
                                        alt={`Thumbnail ${index}`}
                                        className={`cursor-pointer mix-blend-multiply object-contain border-1 rounded-md w-full mx-auto ${
                                            mainImage === item
                                                ? "border-yellow-400"
                                                : "border-transparent"
                                        } hover:border-gray-300`}
                                        onClick={() => setMainImage(item)} // Change main image on click
                                    />
                                )
                            )}
                        </div>

                        <div className="w-80">
                            <img
                                src={mainImage}
                                alt="Selected"
                                className="w-full h-full mix-blend-multiply object-contain"
                            />
                        </div>
                    </div>

                    <div className="w-1/2">
                        <div className="flex justify-between items-center">
                            <div className="-space-y-1">
                                <p className="font-main font-medium text-gray-500">
                                    {product.part_number}
                                </p>
                                <h2 className="text-xl font-main">
                                    {product.name}
                                </h2>
                            </div>
                            <div className="my-auto bg-[#FFEEC6] p-1 rounded-full">
                                <HeartIcon />
                            </div>
                        </div>

                        <div className="flex justify-start gap-5 items-center mt-[1em]">
                            <div>
                                <div className="flex gap-2 items-end">
                                    <span className="text-4xl font-medium font-main text-black">
                                        ₹{product.discount_price * data.quantity}
                                    </span>
                                    <span className="text-sm text-gray-600 font-main">
                                        {product.discount_price}/piece
                                    </span>
                                </div>

                                <p className="text-[12px] text-gray-600 font-main">
                                    Excluding VAT and Shipping
                                </p>
                            </div>

                            <div className="my-auto">
                                <div className="flex space-x-2 border-[1px] border-[#E4E7E9] rounded-md p-2">
                                    <button onClick={decrement} className="px-2 md:px-3 font-main text-primary text-lg md:text-xl">
                                        <Minus />
                                    </button>
                                    <p className="text-primary text-xl font-main  font-medium px-2">
                                        {data.quantity}
                                    </p>
                                    <button onClick={(e) => increment(e)} className="px-2 md:px-3 font-main  text-primary text-lg md:text-xl">
                                        <Plus />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center mt-[3em]">
                            <TimeIcon />
                            <span className="text-[13px] text-gray-600 font-light font-main">
                                {product.created_at}
                            </span>
                        </div>
                        <div className="flex space-x-3 mt-2">
                            <TradeIcon />
                            <span className="text-[13px] text-gray-600 font-light font-main">
                                Item is not returnable or cancellable
                            </span>
                        </div>
                        <div className="flex gap-3 mt-[1em]">
                            <button className="border-primary border-[1px] rounded-md text-md w-full text-primary font-medium font-primary p-2">
                                Add to Cart
                            </button>
                            <button className="bg-secondary rounded-md text-md w-full text-black font-medium font-primary p-2">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-[2em] gap-[4em] bg-white p-10 rounded-lg border-1 border-gray-300">
                    <h2 className="text-2xl font-main text-black font-medium">
                        Product Details
                    </h2>

                    <div className="my-8  flex justify-between items-start flex-wrap space-y-2">
                    {Object.entries(product).filter(item => !(["images", "image", "features"].includes(item[0]))).map(
                        ([key, value], index) => (
                            <div
                                key={index}
                                className="w-[45%] me-[2em]"
                            >
                                <div className="flex items-center space-x-10">

                                    <h4 className="text-[13px] w-1/4 font-main font-bold capitalize">
                                        {key.replace(/_/g, " ")}
                                    </h4>

                                    <div className="w-full font-main font-normal text-primary">
                                        <p>{value}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
                </div>
            </section>
        </UserLayout>
    );
};

export default ViewProduct;
