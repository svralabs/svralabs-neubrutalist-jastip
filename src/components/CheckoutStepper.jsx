import { useState } from 'react';

export default function CheckoutStepper({ steps, currentStep }) {
  const [activeStep, setActiveStep] = useState(currentStep);

  const handleStepClick = (index) => {
    if (index < activeStep) {
      setActiveStep(index);
    }
  };

  return (
    <div className="flex justify-between items-center mb-lg">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <button
            onClick={() => handleStepClick(index)}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              index <= activeStep
                ? 'bg-primary text-on-primary'
                : 'bg-surface-variant text-on-surface-variant'
            }`}
          >
            {index < activeStep ? (
              <span className="material-symbols-outlined">check</span>
            ) : (
              <span className="font-label-pill">{index + 1}</span>
            )}
          </button>
          <span className="text-xs mt-1 text-text-secondary">{step}</span>
        </div>
      ))}
    </div>
  );
}
