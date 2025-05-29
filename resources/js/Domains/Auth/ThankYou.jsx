import React, { useState,useEffect } from "react";
import RegisterLayout from "@/Layouts/GuestLayout";
import { router, usePage } from "@inertiajs/react";
import {RegisterProvider, useRegisterContext} from "@/Context/RegisterContext.jsx";
import {SecondaryButton, TextInput} from "@/Shared/index.js";
import {PrimaryButton} from "@/Shared/index.js";
import AppButton from "@/Shared/AppButton.jsx";

export default function ThankYou() {
    return (
//    <RegisterLayout>
        <div className="h-screen gap-5 px-[2em] flex items-center justify-center  text-white ">
            {/* Left Section */}
            <div className="flex justify-center items-start w-[600px]">
                <div
                    className="w-full flex flex-col justify-center items-center px-10 py-10 bg-gradient-to-br from-[#ffffff] to-[#ffffff] text-left">
                    <img src="/img/Thank you Asset 1.png" alt="Estbanh Logo" className="w-[40%] mb-6"/>
                    <h5 className="text-lg font-bold uppercase tracking-wide text-secondary mb-1 text-center">
                        Thank You for Registering
                    </h5>
                    <p className="text-3xl font-bold mb-3 leading-tight text-center text-black">
                        We’ve received your registration details successfully
                    </p>
                    <div className="mt-8">
                        <p className="text-gray-600 text-sm text-center">
                            Your account will be created after we verify all the provided information <br/>
                            Once approved by our admin team, you'll receive a confirmation email with login instructions.
                        </p>
                    </div>
                </div>
            </div>

        </div>

        // </RegisterLayout>
    );
}
