"use client";

import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Props {
  placeholder?: string;
  id: string;
  icon?: string;
}

const InputField = ({ placeholder, id, icon }: Props) => {
  const [value, setValue] = useState("");

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className={icon && "relative"}>
      <input
        id={id}
        name={id}
        value={value}
        className={
          "input-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10"
        }
        type="text"
        placeholder={placeholder}
        required
        onChange={(e) => onChange(e.target.value)}
      />
      {icon === "faSearch" && (
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute top-3 left-3 text-gray-400 pointer-events-none"
        />
      )}
    </div>
  );
};

export default InputField;
