import React from "react";

const InputField = ({
  label,
  name,
  type,
  autoComplete,
  value,
  onBlur,
  onChange,
  error,
  touched,
  data_testid,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          data-testid={data_testid}
          name={name}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {error && touched ? (
          <p className="text-[#ff0000] text-sm">{error}</p>
        ) : null}
      </div>
    </div>
  );
};

export default InputField;
