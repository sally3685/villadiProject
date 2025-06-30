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

  // Validate hex color format
  const validateHexColor = (value: string): boolean => {
    const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i;
    return hexColorRegex.test(value);
  };

  // Handle input changes with validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setColor(value);
    setIsValid(validateHexColor(value) || value === "");
  };

  // Handle color picker changes
  const handlePickerChange = (newColor: string) => {
    setColor(newColor);
    setIsValid(true);
  };

  return (
    <div className={`col-span-full ${className}`}>
      <label className="block text-sm lg:text-lg font-medium text-black mb-2">
        {label}
      </label>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
        <div className="flex items-center gap-4 mb-4">
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
            className="w-10 h-10 rounded-md border border-gray-300 cursor-pointer transition-all hover:scale-105"
            style={{ backgroundColor: isValid ? color : "#ff0000" }}
            onClick={() => setShowPicker(!showPicker)}
            title={showPicker ? "Hide color picker" : "Show color picker"}
          />
        </div>

        {!isValid && (
          <p className="mt-1 text-sm text-red-600 mb-4">
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
