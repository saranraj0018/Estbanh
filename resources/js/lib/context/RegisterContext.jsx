import { createContext, useContext, useState } from "react";
import {useForm} from "@inertiajs/react";


const RegisterContext = createContext();


export function RegisterProvider({children}) {


    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        cnr_number: '',
        vat_number: '',
        address_line_1: '',
        address_line_2: '',
        country:'',
        state:'',
        city:'',
        pin_code:'',
        issuer_name: '',
        issuer_phone: '',
        accountant_name: '',
        accountant_phone: '',
        authority_name: '',
        authority_phone: '',
        terms: '',
        images: []
    });

    return (
        <RegisterContext.Provider
            value={{
                data, setData, post,
                errors, processing
            }}
        >
            {children}
        </RegisterContext.Provider>

    );
}

export const useRegisterContext = () => useContext(RegisterContext);
