import StepIndicator from "@/components/StepIndicator";
import { PrimaryButton, SecondaryButton } from "@/shared";
import { useEffect, useState } from "react";

export const useSwitchLayout = (data, totalSteps, onSubmit) => {
    const [step, setStep] = useState(1);
    const [canProceed, setCanProceed] = useState(false); // Always true in your current logic

    const nextStep = () =>
        step < totalSteps && canProceed && setStep((prev) => prev + 1);

    const prevStep = () => step > 1 && setStep((prev) => prev - 1);

    const Step = (elStep, validation, children) => {
        const handleSubmit = (e) => {
            e.preventDefault();
            step === totalSteps ? onSubmit() : nextStep();
        };

        useEffect(() => {
            setCanProceed(() => validation);
        }, [step, data]);

        return (
            <div>
                <div className="mb-10">
                <StepIndicator step={step} totalSteps={totalSteps} />
            </div>

                {elStep == step && children}

                {step < totalSteps && (
                    <div className="mt-10 flex justify-between gap-3">
                        <div className="flex-1">
                            <SecondaryButton
                                type="button"
                                className="" 
                                onClick={() => {
                                    dispatchSideBarState();
                                }}
                            >
                                Cancel
                            </SecondaryButton>
                        </div>

                        {step > 1 ? (
                            <SecondaryButton type="button" onClick={prevStep}>
                                Back
                            </SecondaryButton>
                        ) : (
                            <div />
                        )}
                        <PrimaryButton
                            type="button"
                            disabled={!canProceed}
                            onClick={() => {
                                nextStep();
                              
                            }}
                        >
                            Next
                        </PrimaryButton>
                    </div>
                )}
            </div>
        );
    };

    return { nextStep, prevStep, Step, step, canProceed, setCanProceed };
};
