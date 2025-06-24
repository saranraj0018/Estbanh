import { useAdminDefaultContext } from "@/lib/context/AdminDefaultContext";
import PrimaryButton from "@/shared/PrimaryButton";
import SecondaryButton from "@/shared/SecondaryButton";
import React from "react";

const FormSubmitButtons = ({ onCreate, onUpdate }) => {

        const {
            dispatchSideBarState,
            getObjectMountState,
        } = useAdminDefaultContext();

    return (
        <div className="mt-6 flex justify-end">
            <SecondaryButton
                type="button"
                onClick={() => {
                    dispatchSideBarState();
                }}
            >
                Cancel
            </SecondaryButton>

            <PrimaryButton type="submit" className="ms-3">Save</PrimaryButton>
        </div>
    );
};

export default FormSubmitButtons;
