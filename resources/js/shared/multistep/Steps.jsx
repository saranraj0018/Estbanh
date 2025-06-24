import { useState, Children, useEffect } from "react";
import { PrimaryButton, SecondaryButton } from "..";
import { useAdminDefaultContext } from "@/lib/context/AdminDefaultContext";
import StepIndicator from "@/components/StepIndicator";

export default function Steps({ children, totalSteps, data, onSubmit }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isValid, setIsValid] = useState(false);

    const { dispatchSideBarState } = useAdminDefaultContext();

    const next = () => {
        if (currentStep < totalSteps) setCurrentStep((s) => s + 1);
    };

    const prev = () => {
        if (currentStep > 1) setCurrentStep((s) => s - 1);
    };

    const stepArray = Children.toArray(children);
    const currentStepComponent = stepArray.find(
        (child) => child.props.step === currentStep
    );

    useEffect(() => {
        setIsValid(currentStepComponent?.props?.validate() ?? false);
    }, [data, currentStep]);

    return (
        <div className="">
            <div className="mb-10">
                <StepIndicator step={currentStep} totalSteps={totalSteps} />
            </div>

            <div>{currentStepComponent}</div>

            <div className="flex items-center justify-between gap-4 mt-10">
                <div className="flex-1">
                    <SecondaryButton onClick={() => dispatchSideBarState()}>
                        Cancel
                    </SecondaryButton>
                </div>

                {currentStep > 1 ? (
                    <SecondaryButton type="button" onClick={prev}>
                        Back
                    </SecondaryButton>
                ) : null}

                {currentStep < totalSteps ? (
                    <PrimaryButton
                        type="button"
                        disabled={!isValid}
                        onClick={next}
                    >
                        Next
                    </PrimaryButton>
                ) : null}

            

                {currentStep === totalSteps && (
                    <div className="text-right">
                        <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
                    </div>
                )}
            </div>
        </div>
    );
}
