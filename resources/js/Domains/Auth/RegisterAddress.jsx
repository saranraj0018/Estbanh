import React, { useState, useEffect } from "react";
import RegisterLayout from "@/Layouts/GuestLayout";
import { router } from "@inertiajs/react";

export default function AddressStep() {

    const [form, setForm] = useState({
        address_line_1: "",
        address_line_2: "",
        country: "India",
        state: "",
        city: "",
        pincode: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');

    useEffect(() => {
        fetch('/locations/countries')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            fetch(`/locations/states/${selectedCountry}`)
                .then(res => res.json())
                .then(data => setStates(data));
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedState) {
            fetch(`/locations/cities/${selectedState}`)
                .then(res => res.json())
                .then(data => setCities(data));
        }
    }, [selectedState]);


    const validate = () => {
        const newErrors = {};
        if (!form.address_line_1) newErrors.address_line_1 = "Address Line 1 is required";
        if (!form.pincode) newErrors.pincode = "Pincode is required";
        if (!form.state) newErrors.state = "State is required";
        if (!form.city) newErrors.city = "City is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            router.post("/register/step-two", form);
        }
    };

    return (
        <RegisterLayout>
            <h2 className="text-2xl font-bold mb-1">Your Address Details</h2>
            <p className="text-sm text-gray-500 mb-6">Tell us where you're from</p>

            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Address Line 1</label>
                    <input
                        type="text"
                        name="address_line_1"
                        value={form.address_line_1}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 text-sm"
                    />
                    {errors.address_line_1 && <p className="text-red-500 text-xs">{errors.address_line_1}</p>}
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Address Line 2</label>
                    <input
                        type="text"
                        name="address_line_2"
                        value={form.address_line_2}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 text-sm"
                    />
                </div>

                <div className="flex gap-4 mt-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium mb-1">Country</label>
                        <select className="w-full border rounded px-3 py-2 text-sm"
                            name="country"
                            value={form.country}
                            onChange={(e) => {
                                handleChange(e);
                                setSelectedCountry(e.target.value);
                            }}
                        >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country.id} value={country.id}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm font-medium mb-1">State</label>
                        <select className="w-full border rounded px-3 py-2 text-sm"
                            name="state"
                            value={form.state}
                            onChange={(e) => {
                                handleChange(e);
                                setSelectedState(e.target.value);
                            }}
                            disabled={!selectedCountry}
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state.id} value={state.id}>
                                    {state.name}
                                </option>
                            ))}
                        </select>
                        {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
                    </div>
                </div>

                <div className="flex gap-4 mt-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium mb-1">City</label>
                        <select className="w-full border rounded px-3 py-2 text-sm"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            disabled={!selectedState}
                        >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option key={city.id} value={city.id}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                        {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm font-medium mb-1">Pincode</label>
                        <input
                            type="number"
                            name="pincode"
                            value={form.pincode}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2 text-sm"
                        />
                        {errors.pincode && <p className="text-red-500 text-xs">{errors.pincode}</p>}
                    </div>
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
