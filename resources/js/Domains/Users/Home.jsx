import UserLayout from "@/Layouts/UserLayout";
import { Head, Link } from "@inertiajs/react";

import BanSideImg from "@/Assets/home/banner-sider.png";

// import Header from './general/Header';
// import Footer from './general/Footer';

// import Section1 from './home/Section1';
// import Section2 from './home/Section2';
// import Section3 from './home/Section3';
// import Section4 from './home/Section4';
// import Section5 from './home/Section5';
// import Section6 from './home/Section6';

// import ProductImg1 from "../../../public/assets/home/Product1.png";
// import ProductImg2 from "../../../public/assets/home/Product2.png";
// import ProductImg3 from "../../../public/assets/home/Product3.png";
// import Section2_Product1 from "../../../public/assets/home/Section2Prod1.png";
// import Section2_Product2 from "../../../public/assets/home/Section2Prod2.png";
// import Section2_2_Product1 from "../../../public/assets/home/Section2-2Prod1.png";
// import Section2_2_Product2 from "../../../public/assets/home/Section2-2Prod2.png";
// import Section2_2_Product3 from "../../../public/assets/home/Section2-2Prod3.png";
// import Section3_Product1 from "../../../public/assets/home/Sec_3_product.png";
// import Section3_Product2 from "../../../public/assets/home/Sec_3_product_2.png";
// import Section3_Product3 from "../../../public/assets/home/Sec_3_product_3.png";
// import Section3_Product4 from "../../../public/assets/home/Sec_3_product_4.png";
// import Section3_Product5 from "../../../public/assets/home/Sec_3_product_5.png";
// import Section3_Product6 from "../../../public/assets/home/Sec_3_product_6.png";
// import Section3_Product7 from "../../../public/assets/home/Sec_3_product_7.png";
// import Section4_Product1 from "../../../public/assets/home/Sec_4_Product.png";

export default function Home({ auth, laravelVersion, phpVersion }) {
    // const handleImageError = () => {
    //     document
    //         .getElementById('screenshot-container')
    //         ?.classList.add('!hidden');
    //     document.getElementById('docs-card')?.classList.add('!row-span-1');
    //     document
    //         .getElementById('docs-card-content')
    //         ?.classList.add('!flex-row');
    //     document.getElementById('background')?.classList.add('!hidden');
    // };

    // const PSArrays = ["TOYOTA 6FBRE16", " BT CHE-1 55", " CROWN PTHSO", "NISSANAGI-NIQQQ",];
    // const Sec1_Products = [
    //     { name: "Chrome Gear Machine", offer: "50%", image: ProductImg1 },
    //     { name: "Magnet Bar Machine", offer: "50%", image: ProductImg2 },
    //     { name: "Transmission Cog Wheels", offer: "Save 50% Off", image: ProductImg3 },
    // ];
    // const Sec2_Products = [
    //     { Caption: "Find. Fix. Upgrade", Heading: "Find the Right Parts, Fast and Easy!", ButtonName: "Check Out Now", ButtonLink: "#", Image: Section2_Product1 },
    //     { Caption: "Power Up with Reliable Electronics!", Heading: "Bringing Reliable Parts to Your Doorstep!", ButtonName: "Browse Parts", ButtonLink: "#", Image: Section2_Product2 },
    //     { Caption: "Your Parts, Your Solution!", Heading: "Smart Solutions for Every Project!", ButtonName: "Discover More", ButtonLink: "#", Image: Section2_2_Product1 },
    //     { Caption: "Power Your Projects!", Heading: "Your One-Stop Shop for Electronics & More!", ButtonName: "Unlock Deals", ButtonLink: "#", Image: Section2_2_Product2 },
    //     { Caption: "Parts That Perform!", Heading: "Smart Solutions for Every Project!", ButtonName: "Shop Now", ButtonLink: "#", Image: Section2_2_Product3 },
    // ];
    // const Sec3_Products = [
    //     { Heading: "Top-Rated Motors", Description: "Powerful, efficient, and built to last", ButtonLink: "#", Image: Section3_Product1 },
    //     { Heading: "High-Performance Sensors", Description: "Accuracy you can trust.", ButtonLink: "#", Image: Section3_Product2 },
    //     { Heading: "Durable Cables & Wires", Description: "Stable and reliable connections.", ButtonLink: "#", Image: Section3_Product3 },
    //     { Heading: "Essential Switches", Description: "Smooth control every time.", ButtonLink: "#", Image: Section3_Product4 },
    //     { Heading: "Robust Power Supplies", Description: "Consistent power flow.", ButtonLink: "#", Image: Section3_Product5 },
    //     { Heading: "Reliable Connectors", Description: "Secure and strong links.", ButtonLink: "#", Image: Section3_Product6 },
    //     { Heading: "Efficient Cooling Fans", Description: "Keep your machines cool.", ButtonLink: "#", Image: Section3_Product7 },
    //     { Heading: "Versatile Tools", Description: "Quick fixes made easy.", ButtonLink: "#", Image: Section3_Product1 },
    // ];
    // const Sec4_Products = [
    //     { Caption: "Tech Upgraded, Hassle-Free!", Heading: "Empowering Your Projects with Quality Parts!", Discount: "80%", Image: Section4_Product1 },
    //     { Caption: "Tech Upgraded, Hassle-Free!", Heading: "Empowering Your Projects with Quality Parts!", Discount: "80%", Image: Section4_Product1 },
    //     { Caption: "Tech Upgraded, Hassle-Free!", Heading: "Empowering Your Projects with Quality Parts!", Discount: "80%", Image: Section4_Product1 },
    // ];

    const SearchIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 19 19"
            fill="none"
        >
            <path
                d="M9.29415 16.1913C13.0173 16.1913 16.0356 13.1731 16.0356 9.44991C16.0356 5.72673 13.0173 2.7085 9.29415 2.7085C5.57097 2.7085 2.55273 5.72673 2.55273 9.44991C2.55273 13.1731 5.57097 16.1913 9.29415 16.1913Z"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.9834 14.4888L16.6264 17.125"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <UserLayout>
            <Head title="Home" />
            {/* <Section1 Username='Mohamed Hussain' myArray={PSArrays} Sec1_Products={Sec1_Products} /> */}
            {/* <Section2 Sec2_Products={Sec2_Products} />
            <Section3 Sec3_Products={Sec3_Products} />
            <Section4 Sec4_Products={Sec4_Products} />
            <Section5 />
            <Section6 /> */}

            <section className="px-[1em] lg:px-[6em] xl:px-[6em] 2xl:px-[10em] py-16 md:py-5 bg-[#f8f8f9]">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-7 my-auto space-y-5">
                        <h2 className="text-2xl lg:text-4xl text-primary font-primary font-medium">
                            Hey Krisnna,
                            <br />
                            looking for the right parts?
                        </h2>
                        <p className="font-medium text-[#46505E] text-lg">
                            Find all the parts and accessories we stock for your
                            machine
                        </p>
                        <div className="p-1 rounded-[10px] w-full md:w-4/5 flex space-x-2 bg-white drop-shadow-lg">
                            <select
                                name=""
                                id=""
                                className="border-none rounded-md focus:outline-none focus:ring-0 focus:ring-white text-zinc-500 text-[12px] md:text-[15px] pe-2 md:pe-auto w-1/2"
                            >
                                <option value="Make">Make</option>
                                <option value="Option1">Option1</option>
                                <option value="Option2">Option2</option>
                            </select>
                            <select
                                name=""
                                id=""
                                className="border-none rounded-md focus:outline-none focus:ring-0 focus:ring-white text-zinc-500 text-[12px] md:text-[15px] me-2 md:pe-auto w-full"
                            >
                                <option value="Make">Select your Model</option>
                                <option value="Option1">Option1</option>
                                <option value="Option2">Option2</option>
                            </select>
                            <button className="text-zinc-400 text-[13px] font-primary">
                                Clear
                            </button>
                            <button className="bg-primary text-white font-primary py-2 px-1 md:px-3 flex font-medium my-auto rounded-[10px] text-[12px] md:text-[15px]">
                                <div className="my-auto me-1">{SearchIcon}</div>
                                Search
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <p className="text-primary font-primary font-medium">
                                Popular Searches:
                            </p>
                            <ul className="flex gap-2 flex-wrap">
                                {/* {myArray.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="py-[2px] px-[3px] rounded-[5px] bg-white font-primary text-[#556174] font-medium text-sm border-[1px] border-[#D6DAE1]"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))} */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5 my-auto">
                        <img
                            src={BanSideImg}
                            alt=""
                            className="w-full md:w-5/6"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#FFEEC6] py-5 px-[1em] lg:px-[6em] xl:px-[6em] 2xl:px-[10em]">
                <div className="grid grid-cols-12 gap-3">
                    {/* {Sec1_Products.map((product, index) => (
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
                    ))} */}
                </div>
            </section>
        </UserLayout>
    );
}
