interface FormTextareaProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  required?: boolean;
  rows?: number;
}

export const FormTextarea = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  required = true,
  rows = 3,
}: FormTextareaProps) => (
  <div className="col-span-full">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-black lg:text-lg"
    >
      {label}
    </label>
    <div className="mt-2">
      <textarea
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder}
        className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 ${
          error ? "outline-red-300" : "outline-gray-300"
        } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#7abc43] lg:text-sm/6`}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="mt-3 text-sm/6 text-red-600">{error}</p>}
    </div>
  </div>
);
