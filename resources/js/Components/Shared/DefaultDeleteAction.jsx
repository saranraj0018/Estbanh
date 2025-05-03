import { useAdminDefaultContext } from "@/Context/AdminDefaultContext";
import DangerButton from "@/Shared/DangerButton";
import Heading from "@/Shared/Heading";
import SecondaryButton from "@/Shared/SecondaryButton";
import React from "react";

const DefaultDeleteAction = ({ title, onDelete }) => {

    const { dispatchSideBarState } = useAdminDefaultContext();

    return (
        <div>
            <Heading>Are you sure you want to delete this {title}?</Heading>

            <div className="mt-6 flex justify-end">
                <SecondaryButton
                    onClick={() => {
                        dispatchSideBarState();
                    }}
                >
                    Cancel
                </SecondaryButton>

                <DangerButton onClick={onDelete} className="ms-3">Delete</DangerButton>
            </div>
        </div>
    );
};

export default DefaultDeleteAction;
