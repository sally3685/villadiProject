import { useState, useRef, useEffect } from "react";
import { Check, ChevronsUpDownIcon } from "lucide-react";

interface SearchableSelectProps {
  options: any[] | undefined;
  selectedOption: any | null;
  onSelect: (option: any | null) => void;
  placeholder?: string;
  noOptions?: string;
}

export default function SearchableSelect({
  options,
  selectedOption,
  onSelect,
  placeholder = "Search...",
  noOptions = "No option found",
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightSelected, setHighlightSelected] = useState(false);
  const selectedItemRef = useRef<HTMLLIElement>(null);

  const filteredOptions = options?.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    if (isOpen && selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView({ block: "nearest" });
      setHighlightSelected(true);
      const timer = setTimeout(() => setHighlightSelected(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsOpen(true);
    if (selectedOption && value !== selectedOption.name) {
      onSelect(null);
    }
  };

  const handleSelect = (option: any) => {
    onSelect(option);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative mt-2">
      <div className="relative">
        <input
          type="text"
          className="w-full rounded-md bg-white py-1.5 pr-10 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          placeholder={placeholder}
          value={selectedOption?.name || searchTerm}
          onChange={handleInputChange}
          onClick={() => setIsOpen(true)}
        />
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) setSearchTerm("");
          }}
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <ChevronsUpDownIcon
            className="size-4 text-gray-500 sm:size-4"
            aria-hidden="true"
            data-slot="icon"
          />
        </button>
      </div>

      <ul
        className={`transition duration-100 ease-in ${
          isOpen ? "block" : "hidden"
        } absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm`}
        role="listbox"
        aria-labelledby="listbox-label"
        onMouseEnter={() => setHighlightSelected(false)}
      >
        {filteredOptions && filteredOptions.length > 0 ? (
          filteredOptions.map((option, index) => {
            const isSelected = selectedOption?.id === option.id;
            return (
              <li
                key={index}
                ref={isSelected ? selectedItemRef : null}
                className={`relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none hover:bg-indigo-600 hover:text-white ${
                  isSelected
                    ? highlightSelected
                      ? "bg-indigo-600 text-white"
                      : "font-semibold outline-hidden"
                    : "font-normal"
                }`}
                role="option"
                onClick={() => handleSelect(option)}
              >
                <span
                  className={`ml-3 block truncate ${
                    isSelected ? "font-semibold" : "font-normal"
                  }`}
                >
                  {option.name}
                </span>
                {isSelected && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                    <Check
                      className="size-5"
                      color={highlightSelected ? "#ffffff" : "#4f39f6"}
                    />
                  </span>
                )}
              </li>
            );
          })
        ) : (
          <li className="relative cursor-default py-2 pr-9 pl-3 text-gray-500 select-none">
            {noOptions}
          </li>
        )}
      </ul>
    </div>
  );
}
