import "@/Assets/Styles/style.css";
import ApplicationLogo from "@/Shared/ApplicationLogo";
import { Link } from "@inertiajs/react";
import React from "react";

export default function GuestLayout({ children, className }) {
    return (
        <>
            <div className={`bg-gradient-to-br from-[#111827] to-[#1f2937] flex items-start justify-between w-full h-screen p-[2em] gap-5 overflow-hidden ` + className}>
                <div className="w-2/5 h-full p-[3em] flex flex-col items-center justify-center rounded-xl gap-3">
                    <Link href="/">
                        <ApplicationLogo className="h-32 w-32 fill-current text-gray-500 mb-5" />
                    </Link>

                    <h2 className="text-sm font-normal uppercase font-main tracking-wide text-gray-300 text-center">
                        MEETING TOMORROW'S
                        <br /> ENERGY NEEDS
                    </h2>
                    <div className="mt-3 px-[2em]">
                        <h1 className="text-3xl text-white font-bold font-main mb-3 leading-tight text-center">
                            Let’s setup your <br />
                            <span className="text-secondary">
                                Operating Agreement
                            </span>
                        </h1>
                        <p className="text-gray-400 mt-5 font-main text-[12px] text-center">
                            All-in-one solution to form your business in the
                            state. Form a new company from scratch or onboard
                            your existing US company.
                        </p>
                    </div>
                </div>
                <div className="bg-white h-full w-3/5 rounded-xl p-[3em] ">
                    {children}
                </div>
            </div>
        </>
    );
}
