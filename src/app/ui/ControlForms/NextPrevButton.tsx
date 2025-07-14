import React from "react";

const NextPrevButton = ({
  handleStep,
  disabled,
  text,
  bg,
  hoverBg,
  disBg,
}: {
  handleStep: () => void;
  disabled: boolean;
  text: string;
  bg?: string;
  hoverBg?: string;
  disBg?: string;
}) => {
  return (
    <button
      type="button"
      onClick={handleStep}
      className={`rounded bg-blue-700 ${bg} px-4 py-2 text-white ${
        disabled
          ? `cursor-not-allowed bg-neutral-300 ${disBg}`
          : `cursor-pointer hover:bg-blue-800 ${hoverBg}`
      }`}
    >
      {text}
    </button>
  );
};

export default NextPrevButton;
