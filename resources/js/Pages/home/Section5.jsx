import WCU_Image from "../../../../public/assets/home/WCU.png";
import WCU_Icon1 from "../../../../public/assets/home/WCU-I1.png";
import WCU_Icon2 from "../../../../public/assets/home/WCU-I2.png";
import WCU_Icon3 from "../../../../public/assets/home/WCU-I3.png";
import WCU_Icon4 from "../../../../public/assets/home/WCU-I4.png";

const Section5 = () => {
    return (
        <>
            <section className="px-[1em] lg:px-[6em] xl:px-[6em] 2xl:px-[10em] space-y-8">
                <div className="text-center font-primary space-y-2">
                    <h2 className="font-medium text-3xl text-primary">
                        Why Choose Us
                    </h2>
                    <p className="font-primary text-primary">
                        Our Trusted Partner for Electrical & Electronic Parts –
                        delivering <br /> high-quality components with Precision
                    </p>
                </div>
                <div className="grid grid-cols-10 gap-4">
                    <div className="col-span-10 lg:col-span-4 rounded-2xl bg-[url(../../public/assets/home/WCU-Bg.png)] p-6">
                        <div className="flex justify-end">
                            <img
                                src={WCU_Image}
                                alt=""
                                className="w-3/6 lg:w-5/6"
                            />
                        </div>
                        <div className="lg:mt-10 space-y-3">
                            <img src={WCU_Icon1} alt="" className="w-14" />
                            <h3 className="font-primary text-xl font-medium">
                                Extensive Product Range
                            </h3>
                            <p className="text-primary text-sm text-justify">
                                We offer a vast selection of electrical and
                                electronic parts, including motors, sensors,
                                cables, switches, and more. Whether you're
                                repairing, upgrading, or building from scratch,
                                you'll find everything you need to keep your
                                machines running smoothly.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-10 lg:col-span-6 space-y-5">
                        <div className="space-y-3 p-4 bg-[#EEF4FF] rounded-2xl">
                            <img
                                src={WCU_Icon2}
                                alt=""
                                className="w-14 mb-10"
                            />
                            <h3 className="font-primary text-xl font-medium">
                                Uncompromising Quality
                            </h3>
                            <p className="text-primary text-sm text-justify">
                                Quality is at the heart of what we do. We source
                                our products from trusted manufacturers,
                                ensuring every component meets industry
                                standards for performance, durability, and
                                reliability — giving you peace of mind with
                                every purchase.
                            </p>
                        </div>
                        <div className="grid grid-cols-10 gap-3">
                            <div className="col-span-10 md:col-span-5 p-4 bg-[#F0F0F0] rounded-2xl space-y-3">
                                <img
                                    src={WCU_Icon3}
                                    alt=""
                                    className="w-14 mb-10"
                                />
                                <h3 className="font-primary text-xl font-medium">
                                    Fast & Reliable Delivery
                                </h3>
                                <p className="text-primary text-sm text-justify">
                                    We understand that downtime can be costly.
                                    That's why we prioritize fast and efficient
                                    delivery, ensuring your parts arrive on time
                                    to keep your projects moving without delay.
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-5 p-4 bg-[#2B2F37] rounded-2xl space-y-3">
                                <img
                                    src={WCU_Icon4}
                                    alt=""
                                    className="w-14 mb-10"
                                />
                                <h3 className="font-primary text-xl font-medium text-white">
                                    Expert Support You Can Rely On
                                </h3>
                                <p className="text-white text-sm text-justify">
                                    Our dedicated support team is here to help.
                                    Whether you need product recommendations,
                                    technical guidance, or assistance with your
                                    Order.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section5;
