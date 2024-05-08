"use client";

import React, { Dispatch, SetStateAction, useState } from "react";

export interface Props {
  countryCode: string;
  setCountryCode: Dispatch<SetStateAction<string>>;
}

const CountrySelector = ({ countryCode, setCountryCode }: Props) => {
  const [value, setValue] = useState(countryCode);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryCode = event.target.value;
    setValue(selectedCountryCode);
    setCountryCode(selectedCountryCode);
  };

  const countries = [
    { locale: "GB", title: "United Kingdom" },
    { locale: "US", title: "USA" },
  ];

  return (
    <select
      onChange={onChange}
      value={value}
      className="input-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      {countries.map((country, index) => {
        return (
          <option key={index} value={country.locale}>
            {country.title} {`(${country.locale})`}
          </option>
        );
      })}
    </select>
  );
};

export default CountrySelector;
