import React from 'react';

const StepIndicator = ({ step = 1, totalSteps = 4 }) => {
  const stepsArray = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-2 w-full max-w-md mx-auto  px-5">
      {stepsArray.map((s, index) => (
        <React.Fragment key={s}>
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center font-semibold text-xs
              ${s <= step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}
              transition-all duration-300 ease-in-out`}
          >
            {s}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`flex-1 h-0.5 transition-all duration-300
                ${s < step ? 'bg-green-500' : 'bg-gray-200'}
              `}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
