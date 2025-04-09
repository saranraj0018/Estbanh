import Header from "./general/Header";
import Footer from "./general/Footer";
import Section1 from "./Checkout/Section1";
import Section2 from "./Checkout/Section2";

const Sec_2_Billing_Shipping ={
        Shipping: "John Doe, 1234 Elm Street, Apt 567 Springfield, IL 62704 United States",
        Billing: "John Doe, 1234 Elm Street, Apt 567 Springfield,IL 62704 United States",
        Date: "20/03/2025"
};
const Sec_2_Product_Data = [
    {
        Products: "Traction Wheel",
        Code: "TVH/5626",
        Quantity: 1,
        Amount: "₹ 8,000",
    },
    {
        Products: "Traction Wheel",
        Code: "TVH/5626",
        Quantity: 1,
        Amount: "₹ 8,000",
    },
    {
        Products: "Traction Wheel",
        Code: "TVH/5626",
        Quantity: 1,
        Amount: "₹ 8,000",
    },
    {
        Products: "Traction Wheel",
        Code: "TVH/5626",
        Quantity: 1,
        Amount: "₹ 8,000",
    }
];
const Sec_2_Trade_Data =
    {
        Career: "DHL EXPRESS EXPORT",
        Delivery_Method: "Ship Available Parts",
        Shipment_Priority: "Shipment Same Day",
        INCO_Terms: "DAP",
        Country_of_Destination: "Saudi Arabia",
        Delivery_Method: "Ship Available Parts",
        Shipment_Priority: "Shipment Same Day",
        Est_total_weight: "1Kg",
        Est_shipping_cost: "₹2,010",
        Subtotal: "₹ 16,017",
        Total: "₹ 7,21,090",
    }

const Checkout = () => {
    return (
        <>
            <Header />
            <Section1 />
            <Section2 Sec_2_Billing_Shipping={Sec_2_Billing_Shipping} Sec_2_Product_Data={Sec_2_Product_Data} Sec_2_Trade_Data={Sec_2_Trade_Data} />
            <Footer />
        </>
    );
};

export default Checkout;
