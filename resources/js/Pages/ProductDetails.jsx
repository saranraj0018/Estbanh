import { Head } from "@inertiajs/react";
import Header from "./general/Header";
import Footer from "./general/Footer";
//****************************SECTION1
import Section1 from "./ProductDetails/Section1";

import S1 from "../../../public/assets/product-details/S1.png";
import S2 from "../../../public/assets/product-details/S2.png";
import S3 from "../../../public/assets/product-details/S3.png";
import S4 from "../../../public/assets/product-details/S4.png";

//****************************SECTION1

//****************************SECTION2
import Section2 from "./ProductDetails/Section2";
//****************************SECTION2

//****************************SECTION3
import Section3 from "./ProductDetails/Section3";
import Sec_3_ProductImg from "../../../public/assets/product-details/Section2-2Prod2.png";
//****************************SECTION3

//****************************SECTION4
import Section4 from "./home/Section4";
import Section4_Product1 from "../../../public/assets/home/Sec_4_Product.png";
//****************************SECTION4

// Product Images Array
const ProductImg = [S1, S2, S3, S4];

// Product Details Object (Fixed structure)
const ProductDetailsData = {
    ProductCode: "TVH/5616",
    ProductName: "Shockley Multipurpose Controller",
    ProductPrice: "₹440",
    ProductQty: "220",
    ProductTaxInfo: "Exclude VAT Shipping",
    ProductImage: ProductImg, // ✅ Corrected array structure
    Time: "2-3 Weeks Lead time may have changed",
    TradeMode: "Item is not returnable or cancellable",
};

const Sec_2_ProductDetails = {
    Brand: "TotalSource",
    Type_of_oil_seal: "sol",
    Spring_present: "Single",
    Unit_of_measurement: "Imperial",

    Inner_diameter_D2_mm: 50.8,
    Outer_diameter_D2_mm: 76.32,
    Height_mm: 7.93,
    Outer_diameter_inch: 3.005,
    Inner_diameter_inch: 3.005,
    Height_inch: 0.312,

    Material: "metal armoured",
    Direction_of_rotation: "no direction",
    Wave: "No",
    Weight: 0.054,
};

const Sec_2_Additionals = {
    Inner_diameter_D2_mm: 50.8,
    Outer_diameter_D2_mm: 76.32,
};
const Sec_2_AboutProduct =
    "You have 12 months left on the warranty of this product.";

const Sec_3_ProductData = [
    {
        ProductCode: "TVH/5616",
        ProductName: "Chrome Gear Machine",
        ProductPrice: "₹440",
        Productcut: "220",
        ProductImage: Sec_3_ProductImg,
    },
    {
        ProductCode: "TVH/5616",
        ProductName: "Chrome Gear Machine",
        ProductPrice: "₹440",
        Productcut: "220",
        ProductImage: Sec_3_ProductImg,
    },
    {
        ProductCode: "TVH/5616",
        ProductName: "Chrome Gear Machine",
        ProductPrice: "₹440",
        Productcut: "220",
        ProductImage: Sec_3_ProductImg,
    },
    {
        ProductCode: "TVH/5616",
        ProductName: "Chrome Gear Machine",
        ProductPrice: "₹440",
        Productcut: "220",
        ProductImage: Sec_3_ProductImg,
    },
];
const Sec4_Products = [
    {
        Caption: "Tech Upgraded, Hassle-Free!",
        Heading: "Empowering Your Projects with Quality Parts!",
        Discount: "80%",
        Image: Section4_Product1,
    },
    {
        Caption: "Tech Upgraded, Hassle-Free!",
        Heading: "Empowering Your Projects with Quality Parts!",
        Discount: "80%",
        Image: Section4_Product1,
    },
    {
        Caption: "Tech Upgraded, Hassle-Free!",
        Heading: "Empowering Your Projects with Quality Parts!",
        Discount: "80%",
        Image: Section4_Product1,
    },
];

const ProductDetails = () => {
    return (
        <>
            <Head title="Product Details | Estbanh" />
            <Header />
            <Section1 ProductDetails={ProductDetailsData} />
            <Section2
                Sec_2_ProductDetails={Sec_2_ProductDetails}
                Sec_2_Additionals={Sec_2_Additionals}
                Sec_2_AboutProduct={Sec_2_AboutProduct}
            />
            <Section3 Sec_3_ProductData={Sec_3_ProductData} />
            <Section4 Sec4_Products={Sec4_Products} />

            <Footer />
        </>
    );
};

export default ProductDetails;
