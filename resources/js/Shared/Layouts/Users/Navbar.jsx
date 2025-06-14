import Logo from "@/Assets/general/Logo-White.png";
import Avatar from "@/Assets/general/Avt.png";
import SearchBar from "@/Components/User/SearchBar";
import { Location, Cart, Discount, Heart, Truck } from "@/Components/icons";
import { Link, usePage } from "@inertiajs/react";
import AuthState from "@/Shared/AuthState";
import Dropdown from "@/Components/Dropdown";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
    const user = usePage().props?.auth?.user;

    return (
        <>
            <header>
                <section className="px-[1em] md:px-[7em] lg:px-[10em] bg-secondary py-[.4em] flex justify-between w-full items-center">
                    <p className="font-main font-regular text-[13px] text-center md:text-start">
                        Welcome to worldwide Megamart!
                    </p>

                    <div className="flex items-center gap-2">
                        <div className="flex mx-2">
                            <div className="me-1">
                                <Location />
                            </div>
                            <p className="font-main font-regular text-[13px]">
                                Deliver to 423651
                            </p>
                        </div>
                        <div className="flex mx-2">
                            <div className="me-1">
                                <Truck />
                            </div>
                            <Link
                                href={route("tracking")}
                                className="font-main font-regular text-[13px]"
                            >
                                Track your order
                            </Link>
                        </div>
                        <div className="flex mx-2">
                            <div className="me-1">
                                <Discount />
                            </div>
                            <p className="font-main font-regular text-[13px]">
                                All Offers
                            </p>
                        </div>
                    </div>
                </section>

                {/* main navbar */}

                <section className="bg-primary py-2 px-[4em] md:px-[8em] flex items-center justify-between">
                    <Link
                        href={route("home")}
                        className="flex items-center justify-between gap-5"
                    >
                        <img src={Logo} className="w-32 md:w-100" />
                    </Link>
                    <SearchBar />
                    <div className="flex items-center gap-10">
                        <div className="flex gap-5">
                            <div className="flex relative w-max my-auto text-gray-500">
                                <Heart color="gray" />
                                {/* <div className="rounded-full text-white py-[1px] px-[6px] text-[10px] bg-secondary absolute top-[-8px] right-[-10px] font-medium border-[2px] border-primary">
                                    1
                                </div> */}
                            </div>

                            <div className="flex relative w-max my-auto">
                                <Cart color="gray" />
                                {/* <div className="rounded-full text-white py-[1px] px-[6px] text-[10px] bg-secondary absolute top-[-8px] right-[-10px] font-medium border-[2px] border-primary">
                                    1
                                </div> */}
                            </div>
                        </div>

                        <div className="my-auto">
                            <p className=" text-secondary text-[10px]">
                                Your Cart Value
                            </p>
                            <p className="text-gray-500 text-[14px] ">₹0.00</p>
                        </div>

                        <div className="flex gap-4 items-center justify-start">
                            <AuthState
                                guest={
                                    <div className="flex gap-2 items-center">
                                        <Link href={route("login")}>
                                            <span className="text-white font-main font-bold text-[13px]">
                                                Login
                                            </span>
                                        </Link>
                                        <Link href={route("register")}>
                                            <span className="text-secondary border-1 px-3 py-2 border-secondary rounded-full  font-main text-[13px]">
                                                Register
                                            </span>
                                        </Link>
                                    </div>
                                }
                            >
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="flex items-center py-1 px-1 rounded-full border-[2px] border-secondary h-min space-x-1"
                                            >
                                                <img
                                                    src={Avatar}
                                                    alt=""
                                                    className="w-8 h-8 my-auto"
                                                /> 
                                                <span className="text-white font-main text-[12px] ">{user?.name}</span>
                                                <ChevronDown color="#fff"/>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content className="bg-primary">
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="bg-primary text-white hover:bg-gray-900"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </AuthState>
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
};

export default Navbar;
