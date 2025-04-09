const Section1 = () => {
    const steps = [
        { label: "Shipping & Delivery" },
        { label: "Billing & Payment" },
        { label: "Review Order" },
        { label: "Done" },
    ];

    const currentStep = 2; // Example: 0-based index for the current step

    return (
        <section className="px-4 lg:px-32 xl:px-40 2xl:px-52 py-10">
            <h2 className="text-center text-3xl font-primary font-semibold mb-10 text-slate-800">
                Review your Order
            </h2>

            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl items-center">
                    {steps.map((step, index) => {
                        const isCompleted = index < currentStep;
                        const isActive = index === currentStep;

                        return (
                            <div
                                key={index}
                                className={`w-full md:w-1/4 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-5 flex flex-col items-center border ${
                                    isCompleted
                                        ? "border-green-400"
                                        : isActive
                                        ? "border-blue-500"
                                        : "border-gray-300"
                                }`}
                            >
                                <div
                                    className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold text-lg mb-3 ${
                                        isCompleted
                                            ? "bg-green-500"
                                            : isActive
                                            ? "bg-blue-500"
                                            : "bg-gray-300"
                                    }`}
                                >
                                    {isCompleted ? "✓" : index + 1}
                                </div>
                                <p className="text-sm text-center font-medium text-gray-700">
                                    {step.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Section1;
