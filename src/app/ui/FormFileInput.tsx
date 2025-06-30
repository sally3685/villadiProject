interface FormFileInputProps {
  id: string;
  label: string;
  addText: string;
  selectedText: string;
  detailsText: string;
  value: string;
  onChange: (value: string) => void;
  error?: string[] | undefined;
  required?: boolean;
  className?: string;
  showLanguageInput?: boolean;
  lang?: string;
  tempLang?: string | null;
}

export const FormFileInput = ({
  id,
  label,
  addText,
  selectedText,
  detailsText,
  value,
  onChange,
  error,
  required = true,
  className = "",
  showLanguageInput = false,
  lang,
  tempLang,
}: FormFileInputProps) => (
  <div className={`col-span-full ${className}`}>
    <label
      htmlFor={id}
      className="block text-sm lg:text-lg font-medium text-black"
    >
      {label}
    </label>
    <div
      className={`mt-2 flex justify-center rounded-lg border border-dashed ${
        error ? "border-red-500" : "border-gray-900/25"
      } px-6 py-10`}
    >
      <div className="text-center">
        <svg
          className="mx-auto size-12 text-gray-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
            clipRule="evenodd"
          />
        </svg>
        <div className="mt-4 flex text-sm/6 text-gray-600">
          <label
            htmlFor={id}
            className="relative text-center w-full cursor-pointer rounded-md bg-white font-semibold text-[#7abc43] focus-within:ring-2 focus-within:ring-[#7abc43] focus-within:ring-offset-2 focus-within:outline-hidden hover:text-[#7abc43]"
          >
            <span>{addText}</span>
            <input
              id={id}
              name={id}
              type="file"
              className="w-full h-full sr-only"
              required={required}
              onChange={(e) =>
                onChange(e.target.value.replace(/^.*[\\\/]/, ""))
              }
            />
            {showLanguageInput && (
              <input
                id="language"
                name="language"
                type="text"
                hidden
                value={tempLang ? tempLang : lang}
                onChange={() => {
                  if (tempLang) return tempLang;
                  else return lang;
                }}
              />
            )}
          </label>
        </div>
        <p className="text-xs/5 text-gray-600">
          <span className="text-xs/5 text-[#7abc43]">{selectedText}</span>
          {value.replace("\\", "/").split("/")}
        </p>
        <p className="text-xs/5 text-gray-600">{detailsText}</p>
      </div>
    </div>
    {error && <p className="mt-3 text-sm/6 text-red-600">{error}</p>}
  </div>
);
