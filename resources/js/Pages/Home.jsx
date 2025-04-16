import { Head, Link } from '@inertiajs/react';

//****************************HEADER-FOOTER
import Header from './general/Header';
import Footer from './general/Footer';

//****************************HEADER-FOOTER
//****************************SECTION1


import Section1 from './home/Section1';
import Section2 from './home/Section2';
import Section3 from './home/Section3';
import Section4 from './home/Section4';
import Section5 from './home/Section5';
import Section6 from './home/Section6';

import ProductImg1 from "../../../public/assets/home/Product1.png";
import ProductImg2 from "../../../public/assets/home/Product2.png";
import ProductImg3 from "../../../public/assets/home/Product3.png";

//****************************SECTION1
//****************************SECTION2

import Section2_Product1 from "../../../public/assets/home/Section2Prod1.png";
import Section2_Product2 from "../../../public/assets/home/Section2Prod2.png";
import Section2_2_Product1 from "../../../public/assets/home/Section2-2Prod1.png";
import Section2_2_Product2 from "../../../public/assets/home/Section2-2Prod2.png";
import Section2_2_Product3 from "../../../public/assets/home/Section2-2Prod3.png";

//****************************SECTION2
//****************************SECTION3

import Section3_Product1 from "../../../public/assets/home/Sec_3_product.png";
import Section3_Product2 from "../../../public/assets/home/Sec_3_product_2.png";
import Section3_Product3 from "../../../public/assets/home/Sec_3_product_3.png";
import Section3_Product4 from "../../../public/assets/home/Sec_3_product_4.png";
import Section3_Product5 from "../../../public/assets/home/Sec_3_product_5.png";
import Section3_Product6 from "../../../public/assets/home/Sec_3_product_6.png";
import Section3_Product7 from "../../../public/assets/home/Sec_3_product_7.png";

//****************************SECTION3
//****************************SECTION4

import Section4_Product1 from "../../../public/assets/home/Sec_4_Product.png";

//****************************SECTION3

export default function Home({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const PSArrays = ["TOYOTA 6FBRE16", " BT CHE-1 55", " CROWN PTHSO", "NISSANAGI-NIQQQ",];
    const Sec1_Products = [
        { name: "Chrome Gear Machine", offer: "50%", image: ProductImg1 },
        { name: "Magnet Bar Machine", offer: "50%", image: ProductImg2 },
        { name: "Transmission Cog Wheels", offer: "Save 50% Off", image: ProductImg3 },
    ];
    const Sec2_Products = [
        { Caption: "Find. Fix. Upgrade", Heading: "Find the Right Parts, Fast and Easy!", ButtonName: "Check Out Now", ButtonLink: "#", Image: Section2_Product1 },
        { Caption: "Power Up with Reliable Electronics!", Heading: "Bringing Reliable Parts to Your Doorstep!", ButtonName: "Browse Parts", ButtonLink: "#", Image: Section2_Product2 },
        { Caption: "Your Parts, Your Solution!", Heading: "Smart Solutions for Every Project!", ButtonName: "Discover More", ButtonLink: "#", Image: Section2_2_Product1 },
        { Caption: "Power Your Projects!", Heading: "Your One-Stop Shop for Electronics & More!", ButtonName: "Unlock Deals", ButtonLink: "#", Image: Section2_2_Product2 },
        { Caption: "Parts That Perform!", Heading: "Smart Solutions for Every Project!", ButtonName: "Shop Now", ButtonLink: "#", Image: Section2_2_Product3 },
    ];
    const Sec3_Products = [
        { Heading: "Top-Rated Motors", Description: "Powerful, efficient, and built to last", ButtonLink: "#", Image: Section3_Product1 },
        { Heading: "High-Performance Sensors", Description: "Accuracy you can trust.", ButtonLink: "#", Image: Section3_Product2 },
        { Heading: "Durable Cables & Wires", Description: "Stable and reliable connections.", ButtonLink: "#", Image: Section3_Product3 },
        { Heading: "Essential Switches", Description: "Smooth control every time.", ButtonLink: "#", Image: Section3_Product4 },
        { Heading: "Robust Power Supplies", Description: "Consistent power flow.", ButtonLink: "#", Image: Section3_Product5 },
        { Heading: "Reliable Connectors", Description: "Secure and strong links.", ButtonLink: "#", Image: Section3_Product6 },
        { Heading: "Efficient Cooling Fans", Description: "Keep your machines cool.", ButtonLink: "#", Image: Section3_Product7 },
        { Heading: "Versatile Tools", Description: "Quick fixes made easy.", ButtonLink: "#", Image: Section3_Product1 },
    ];
    const Sec4_Products = [
        { Caption: "Tech Upgraded, Hassle-Free!", Heading: "Empowering Your Projects with Quality Parts!", Discount: "80%", Image: Section4_Product1 },
        { Caption: "Tech Upgraded, Hassle-Free!", Heading: "Empowering Your Projects with Quality Parts!", Discount: "80%", Image: Section4_Product1 },
        { Caption: "Tech Upgraded, Hassle-Free!", Heading: "Empowering Your Projects with Quality Parts!", Discount: "80%", Image: Section4_Product1 },
    ];

    return (
        <>
            <Head title="Estbanh Homepage" />
            <Header />
            <Section1 Username='Mohamed Hussain' myArray={PSArrays} Sec1_Products={Sec1_Products} />
            <Section2 Sec2_Products={Sec2_Products} />
            <Section3 Sec3_Products={Sec3_Products} />
            <Section4 Sec4_Products={Sec4_Products} />
            <Section5 />
            <Section6 />
            <Footer />
        </>
    );
}