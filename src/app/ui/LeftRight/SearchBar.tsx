import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  lang: string;
  className?: string;
}

export const SearchBar = ({
  value,
  onChange,
  placeholder,
  lang,
  className = "",
}: SearchBarProps) => (
  <div className={`relative w-[285px]`}>
    <input
      type="text"
      className={`z-[1] w-full rounded-2xl border-2 border-black ${className} p-2 text-black`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
    <Search
      className={`absolute top-0 ${className} h-full w-1/5 bg-[#000000]/0! p-2 ${lang === "en" ? "right-0" : "left-0"}`}
    />
  </div>
);
