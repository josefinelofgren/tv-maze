"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Select from "../input-field/select";

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
    <Select onChange={onChange} value={value}>
      {countries.map((country, index) => {
        return (
          <option key={index} value={country.locale}>
            {country.title} {`(${country.locale})`}
          </option>
        );
      })}
    </Select>
  );
};

export default CountrySelector;
