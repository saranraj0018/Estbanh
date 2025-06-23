import { useAdminDefaultContext } from "@/lib/context/AdminDefaultContext";
import DangerButton from "@/shared/DangerButton";
import Heading from "@/shared/Heading";
import SecondaryButton from "@/shared/SecondaryButton";
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
