import {
    Section3Product,
    Section3Product2,
    Section3Product3,
    Section3Product4,
    Section3Product5,
    Section3Product6,
    Section3Product7
} from "@/public/images/home/index";

const ProductBanner = () => {
    const productBanner = [
        {
            Heading: "Top-Rated Motors",
            Description: "Powerful, efficient, and built to last",
            ButtonLink: "#",
            Image: Section3Product,
        },
        {
            Heading: "High-Performance Sensors",
            Description: "Accuracy you can trust.",
            ButtonLink: "#",
            Image: Section3Product2,
        },
        {
            Heading: "Durable Cables & Wires",
            Description: "Stable and reliable connections.",
            ButtonLink: "#",
            Image: Section3Product3,
        },
        {
            Heading: "Essential Switches",
            Description: "Smooth control every time.",
            ButtonLink: "#",
            Image: Section3Product4,
        },
        {
            Heading: "Robust Power Supplies",
            Description: "Consistent power flow.",
            ButtonLink: "#",
            Image: Section3Product5,
        },
        {
            Heading: "Reliable Connectors",
            Description: "Secure and strong links.",
            ButtonLink: "#",
            Image: Section3Product6,
        },
        {
            Heading: "Efficient Cooling Fans",
            Description: "Keep your machines cool.",
            ButtonLink: "#",
            Image: Section3Product7,
        },
        {
            Heading: "Versatile Tools",
            Description: "Quick fixes made easy.",
            ButtonLink: "#",
            Image: Section3Product,
        },
    ];

    return (
        <div className="grid grid-cols-12 gap-3">
            {productBanner.map((item, index) => (
                <div
                    key={index}
                    className="col-span-3 bg-white shadow-md border-1 border-gray-200 rounded-lg p-4"
                >
                    <h4 className="text-[17px] font-main font-medium">
                        {item.Heading}
                    </h4>
                    <p className="font-main text-gray-800 mb-5 text-[13px]">
                        {item.Description}
                    </p>
                    <div className="flex items-start justify-between space-x-2">
                        <button className="bg-secondary text-black font-main font-medium py-2 px-4 rounded-full text-[12px] hover:bg-orange-400 transition-all">
                            Shop Now
                        </button>
                        <img src={item.Image} alt="" className="w-2/5" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductBanner;
