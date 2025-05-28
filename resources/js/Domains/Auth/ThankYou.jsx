import React, { useState,useEffect } from "react";
import RegisterLayout from "@/Layouts/UserRegister";
import { router, usePage } from "@inertiajs/react";
import {RegisterProvider, useRegisterContext} from "@/Context/RegisterContext.jsx";
import {SecondaryButton, TextInput} from "@/Shared/index.js";
import {PrimaryButton} from "@/Shared/index.js";
import AppButton from "@/Shared/AppButton.jsx";

export default function ThankYou() {
    return (

        <div className="min-h-screen gap-5 px-[1em] flex items-center justify-center bg-[#ffffff] text-white">
            {/* Left Section */}
            <div className="h-full flex justify-center">
                <div
                    className="w-full flex flex-col justify-center items-center px-10 py-10 bg-gradient-to-br from-[#ffffff] to-[#ffffff] text-left">
                    <img src="/img/Thank you Asset 1.png" alt="Estbanh Logo" className="w-[40%] mb-6"/>
                    <h5 className="text-lg font-bold uppercase tracking-wide text-gray-300 mb-1 text-center">
                        Thank You for Registering
                    </h5>
                    <p className="text-3xl font-bold mb-3 leading-tight text-center text-gray-400">
                        We’ve received your registration details successfully
                    </p>
                    <div className="mt-8">
                        <p className="text-gray-400 text-sm text-center">
                            Your account will be created after we verify all the provided information <br/>
                            Once approved by our admin team, you'll receive a confirmation email with login instructions.
                        </p>
                    </div>
                </div>
            </div>

        </div>


    );
}
