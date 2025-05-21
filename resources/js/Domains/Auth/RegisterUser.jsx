import React, { useState } from "react";
import RegisterLayout from "@/Layouts/UserRegister";
import { router } from "@inertiajs/react";

export default function RegisterUser() {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        cnr_number: "",
        vat_number: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.first_name) newErrors.first_name = "First name is required";
        if (!form.last_name) newErrors.last_name = "Last name is required";
        if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email is required";
        if (!form.cnr_number) newErrors.cnr_number = "CNR Number is required";
        if (!form.vat_number) newErrors.vat_number = "VAT Number is required";
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            router.post("/register/data", form);
        }
    };

    return (
        <RegisterLayout>
            <h2 className="text-2xl font-bold mb-1">Let’s Get Started</h2>
            <p className="text-sm text-gray-500 mb-6">Power Up Your Projects!</p>

            <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium mb-1">Full name</label>
                        <input
                            type="text"
                            name="first_name"
                            value={form.first_name}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2 text-sm"
                        />
                        {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name}</p>}
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm font-medium mb-1">Last name</label>
                        <input
                            type="text"
                            name="last_name"
                            value={form.last_name}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2 text-sm"
                        />
                        {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name}</p>}
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 text-sm"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">CNR Number</label>
                    <input
                        type="text"
                        name="cnr_number"
                        value={form.cnr_number}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 text-sm"
                    />
                    {errors.cnr_number && <p className="text-red-500 text-xs">{errors.cnr_number}</p>}
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">VAT Number</label>
                    <input
                        type="text"
                        name="vat_number"
                        value={form.vat_number}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 text-sm"
                    />
                    {errors.vat_number && <p className="text-red-500 text-xs">{errors.vat_number}</p>}
                </div>

                <div className="mt-[3em]">
                    <button
                        type="submit"
                        className="w-full mt-6 bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition"
                    >
                        Next →
                    </button>
                </div>
            </form>
        </RegisterLayout>
    );
}
