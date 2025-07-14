import React from "react";
import { Check } from "lucide-react";
interface StepperProps {
  totalSteps: number;
  currentStep: number;
  className?: string;
}

const Stepper: React.FC<StepperProps> = ({
  totalSteps,
  currentStep,
  className = "",
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {Array.from({ length: totalSteps + 1 }).map((_, index) => {
        const stepNumber = index;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <React.Fragment key={stepNumber}>
            <div className="flex items-center">
              {/* Step circle */}

              <div className="relative flex flex-col items-center">
                <div
                  role="button"
                  className={`flex h-5 w-5 items-center justify-center rounded-full border-2 font-semibold transition-all duration-300 ${
                    isCompleted ? "border-[#7abc43]" : "border-black bg-white"
                  }${
                    isActive
                      ? "scale-125 border-green-500 bg-[#7abc43] text-white"
                      : ""
                  } `}
                >
                  <span
                    className={`text-xs ${
                      isActive ? "text-white" : "text-black"
                    }`}
                  >
                    {isCompleted ? (
                      <Check size={16} color="#7abc43" />
                    ) : (
                      stepNumber + 1
                    )}
                  </span>
                </div>
              </div>
              {/* Connector line (except after last step) */}
              {stepNumber < totalSteps && (
                <div
                  className={`mx-2 h-0.5 w-16 ${
                    isCompleted ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
