import PrimaryButton from "@/shared/PrimaryButton";
import SecondaryButton from "@/shared/SecondaryButton";

export const useDefaults = (data, setData, reset, defaultLayoutContext) => {

   const { dispatchContextEvent } = defaultLayoutContext;
    

    const createObjectUpdatedAction = (object) => {
        dispatchContextEvent("editing");
        Object.entries(object).map(([key, value]) => {
            if (data.hasOwnProperty(key)) {
                setData(key, value);
            }
        });
    };

    

    const ActionButtons = ({ object }) => (
        <div className="flex gap-2 items-center">
            <button
                className="text-blue-600 font-main"
                onClick={() => createObjectUpdatedAction(object)}
            >
                Edit
            </button>
            <button
                className="text-red-500 font-main"
                onClick={() => dispatchContextEvent("deleting")}
            >
                Delete
            </button>
        </div>
    );

    const FormSubmitButtons = () => (
        <div className="mt-6 flex justify-end">
            <SecondaryButton
                onClick={() => {
                    dispatchSideBarState()
                    reset()
                }}
            >
                Cancel
            </SecondaryButton>

            <PrimaryButton className="ms-3">Save</PrimaryButton>
        </div>
    );

    return {
        ActionButtons,
        FormSubmitButtons,
    };
};
