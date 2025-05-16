import { useAdminDefaultContext } from "@/Context/AdminDefaultContext";
import PrimaryButton from "@/Shared/PrimaryButton";
import SecondaryButton from "@/Shared/SecondaryButton";
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
