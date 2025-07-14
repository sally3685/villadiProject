"use client";
import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

interface FormColorInputProps {
  label: string;
  color: string;
  setColor: (color: string) => void;
  className?: string;
}

export default function FormColorInput({
  label,
  color,
  setColor,
  className = "",
}: FormColorInputProps) {
  const [isValid, setIsValid] = useState(true);
  const [showPicker, setShowPicker] = useState(false);

  const validateHexColor = (value: string): boolean => {
    const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i;
    return hexColorRegex.test(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setColor(value);
    setIsValid(validateHexColor(value) || value === "");
  };

  const handlePickerChange = (newColor: string) => {
    setColor(newColor);
    setIsValid(true);
  };

  return (
    <div className={`col-span-full ${className}`}>
      <label className="mb-2 block text-sm font-medium text-black lg:text-lg">
        {label}
      </label>

      <div className="rounded-lg border-2 border-dashed border-gray-300 p-4">
        <div className="mb-4 flex items-center gap-4">
          <input
            type="text"
            value={color}
            onChange={handleInputChange}
            className={`w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 ${
              !isValid ? "outline-red-300" : "outline-gray-300"
            } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#7abc43] lg:text-sm/6`}
            placeholder="#RRGGBB"
            maxLength={7}
          />

          <div
            className="h-10 w-10 cursor-pointer rounded-md border border-gray-300 transition-all hover:scale-105"
            style={{ backgroundColor: isValid ? color : "#ff0000" }}
            onClick={() => setShowPicker(!showPicker)}
            title={showPicker ? "Hide color picker" : "Show color picker"}
          />
        </div>

        {!isValid && (
          <p className="mt-1 mb-4 text-sm text-red-600">
            Please enter a valid hex color (e.g., #FFFFFF or #FFF)
          </p>
        )}

        {showPicker && (
          <div className="mt-4 flex justify-center">
            <HexColorPicker color={color} onChange={handlePickerChange} />
          </div>
        )}
      </div>
    </div>
  );
}
